import { NextFunction, Request, Response } from "express";
import {getBooksByGenreAndPublisherFromDB, getFeaturedBooksFromDB, getUserByGenreFromDB, updatePriceStringToInteger} from "./book.service";

// get book by genre 

export const getUserByGenre = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { genre } = req.params;
  const user = await getUserByGenreFromDB(genre);
  console.log("hitted from getUserByGenre", genre);

  res.status(200).json({
    status: "success",
    data: user,
  });
};


//get books by genre and published
export const getBooksByGenreAndPublisher = async (req: Request, res: Response) => {

    const { genre, publisher } = req.params;
    console.log(`genre: ${genre} publisher : ${publisher}`);
    const books = await getBooksByGenreAndPublisherFromDB(genre, publisher);
    res.status(200).json({
      status: "success",
      data: books,
    });
  };


  //task 3 get features books
  export const getFeacturesBooks = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const featuredBooks = await getFeaturedBooksFromDB();
    // res.status(200).json({
    //   status:'success',
    //   data:featuredBooks
    // })
    res.send(featuredBooks)
 };


 export const updateBooksPrice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = await updatePriceStringToInteger();
  console.log('update data====',data);
  res.status(200).json({
    status:'success',
    data:data
  })
};
