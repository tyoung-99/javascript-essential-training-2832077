/**
 * Book.js
 * Represents a general book.
 */

class Book {
  constructor(title, genre, numPages, bookmarkedPage) {
    this.title = title;
    this.genre = genre;
    this.numPages = numPages;
    this.bookmarkedPage = bookmarkedPage;
  }

  setBookmark(newPage) {
    this.bookmarkedPage = newPage;
  }

  print() {
    return `"${this.title}", ${this.genre}, ${this.numPages} page(s) long, Bookmarked at page ${this.bookmarkedPage}`;
  }
}

export default Book;
