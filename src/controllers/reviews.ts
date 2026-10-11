import type { Request, Response } from "express";
import Book from "../models/book.js";
import mongoose from "mongoose";

export const getReviews = async (req: Request, res: Response) => {
  const reviews = await Book.find({}, "reviews");
  res.send(reviews);
};

export const createReview = async (req: Request, res: Response) => {
  const { bookId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(String(bookId))) {
    return res.status(400).send({ message: "ID de libro inválido" });
  }

  const book = await Book.findByIdAndUpdate(
    bookId,
    { text: req.body.text, rating: req.body.rating, bookId: req.body.bookId },
    { new: true },
  );
  res.send(book);
};
