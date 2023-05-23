import { Model, Schema, model } from "mongoose";
import { IBook, IBookMethods, bookModel } from "./book.interface";


const bookSchema = new Schema<IBook, bookModel, IBookMethods>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: [String],
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  publicationYear: {
    type: Number,
    required: true,
  },
  publisher: {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  reviews: [
    {
      user: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  featured:{
    type:String,
  }
  
});

bookSchema.statics.getFeaturedBooks = async function() {
  try {
    const featuredBooks = await this.aggregate([
      {
        $match: { rating: { $gte: 4 } },
      },
      {
        $addFields: {
          featured: {
            $cond: [
              { $gte: ['$rating', 4.5] },
              'BestSeller',
              'Popular',
            ],
          },
        },
      },
      {
        $merge: {
          into: "",
        }
      }
    ]);

    const bulkOps = featuredBooks.map((book) => ({
      updateOne: {
        filter: { _id: book._id },
        update: { $set: { featured: book.featured } },
      },
    }));

    if (bulkOps.length > 0) {
      await this.bulkWrite(bulkOps);
    }

    console.log('Featured field updated successfully.');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const Book = model<IBook,bookModel >('Book', bookSchema);
export default Book;




