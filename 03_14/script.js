/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  [
    new Book("Title1", "Genre1", 123, 23),
    new Book("Title2", "Genre2", 456, 45),
    new Book("Title3", "Genre3", 789, 78),
    new Book("Title4", "Genre4", 147, 44),
    new Book("Title5", "Genre5", 258, 65),
  ]
);

console.log("Backpack contents:\n" + everydayPack.getContents());

everydayPack.contents[0].setBookmark(34);

console.log("Backpack contents:\n" + everydayPack.getContents());
