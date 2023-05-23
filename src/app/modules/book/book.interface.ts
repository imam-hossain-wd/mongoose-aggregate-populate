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
  export interface bookModel extends Model<IBook, {}> {
    getFeaturedBooks(): Promise<HydratedDocument<IBook>>;
  }


  


  