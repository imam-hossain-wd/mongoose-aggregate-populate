import { Model, Schema, model } from "mongoose";
import { IBook, bookModel } from "./book.interface";

const bookSchema = new Schema<IBook, bookModel>({
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
  featured: {
    type: String,
  },
});

bookSchema.statics.getFeaturedBooks = async function () {
  try {
    const featuredBooks = await Book.aggregate([
      {
        $match: { rating: { $gte: 4 } },
      },
      {
        $addFields: {
          featured: {
            $cond: [
              { $lte: ['$rating', 4.5] },
              'Popular',
              'BestSeller'
            ]
          },
        },
      },
    ]);
    console.log(featuredBooks);
    return featuredBooks;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const Book = model<IBook, bookModel>("Book", bookSchema);
export default Book;
