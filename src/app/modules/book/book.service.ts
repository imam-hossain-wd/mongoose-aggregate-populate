import { getFeacturesBooks } from './book.controller';
import { IBook } from "./book.interface"
import Book from './book.model';



//task 2 find book by genre
export const getUserByGenreFromDB = async ( payload: string): Promise<IBook | null> => {
  const book = await Book.findOne({ genre: payload });
  return book;
};

// task 3 find book with a specific genre “Sci-Fi” and published by “Roli Books
export const getBooksByGenreAndPublisherFromDB = async (
  genre: string,
  publisher: string
): Promise<IBook[]> => {
  const books = await Book.find({
    genre: genre,
    "publisher.name": publisher,
  });
  return books;
};


//task 4 
// getFeaturedBooks
export const getFeaturedBooksFromDB = async () => {
  const featuredBook = await Book.getFeaturedBooks();
  console.log(featuredBook);
  return featuredBook;
  // try {
  //   const featuredBooks = await Book.aggregate([
  //     {
  //       $match: { rating: { $gte: 4 } }
  //     },
  //     {
  //       $addFields: {
  //         featured: {
  //           $cond: [
  //             { $gte: ['$rating', 4.5] },
  //             'BestSeller',
  //             'Popular'
  //           ]
  //         }
  //       }
  //     }
  //   ]);
  //   console.log(featuredBooks);
  //   return featuredBooks;
  // } catch (error) {
  //   console.error(error);
  //   throw error;
  // }
};

//task 5

export const updatePriceStringToInteger = async()=> {
  await Book.updateMany(
    {
       publicationYear: { $gt: 2020 },
       price: { $type: 'string'},
     },
   [
     {
       $set: {
         price: {
           $toInt: "$price"
         }
       }
     }
   ]
 )
}



