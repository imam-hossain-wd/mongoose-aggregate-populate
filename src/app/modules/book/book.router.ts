import { Router } from "express";
import { getBooksByGenreAndPublisher, getFeacturesBooks, getUserByGenre } from "./book.controller";


const router:Router = Router();


router.get("/feacturesBook", getFeacturesBooks);
router.get("/:genre", getUserByGenre);
router.get("/:genre/:publisher", getBooksByGenreAndPublisher);

export default router;