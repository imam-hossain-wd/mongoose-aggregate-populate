import { Router } from "express";
import { getBooksByGenreAndPublisher, getFeacturesBooks, getUserByGenre, updateBooksPrice} from "./book.controller";

const router:Router = Router();


router.get("/feacturesBook", getFeacturesBooks);
router.put("/update-prices", updateBooksPrice);
router.get("/:genre", getUserByGenre);
router.get("/:genre/:publisher", getBooksByGenreAndPublisher);

export default router;