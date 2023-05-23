import { HydratedDocument, Model } from "mongoose";

export interface IBook {
    title: string;
    author: string[];
    genre: string;
    publicationYear: number;
    publisher: {
      name: string;
      location: string;
    };
    reviews: {
      user: string;
      comment: string;
    }[];
    rating: number;
    price: string;
    featured: string
  };


  // instance

  // export interface IBookMethods {
  //   setFeaturedField(): string;
  // }
  
  // export interface bookModel extends Model<IBook, {}, IBookMethods> {
  //   getFeaturedBooks(): Promise<HydratedDocument<IBook, IBookMethods>>;
  // }

  export interface bookModel extends Model<IBook, {}> {
    getFeaturedBooks(): Promise<HydratedDocument<IBook>>;
  }


  


  