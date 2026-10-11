import { Router } from "express";
import { createReview, getReviews } from "../controllers/reviews.js";
const router = Router();
router.post("/books/:bookId/reviews", createReview);
router.get("/books/:bookId/reviews", getReviews);
export default router;
