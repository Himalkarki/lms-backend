import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
  publicationDate: Date,
  genre: String,
  noOfPages: Number,
  availability: {
    type: Boolean,
    default: true,
  },
});

export const BookModel = mongoose.model("books", bookSchema);
