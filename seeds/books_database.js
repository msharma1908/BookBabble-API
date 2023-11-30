/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const fs = require("fs");
const express = require("express");
const app = express();
const book_db = [
  {
    id: 1,
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    rating: "4.6",
    thumbnail:
      "https://storage.googleapis.com/du-prd/books/images/9781649374042.jpg",
    releaseDate: "2023-05-02",
  },
  {
    id: 2,
    title: "IRON FLAME",
    author: "Rebecca Yarros",
    rating: "4.5",
    thumbnail:
      "https://storage.googleapis.com/du-prd/books/images/9781649374172.jpg",
    releaseDate: "2023-11-07",
  },
  {
    id: 3,
    title: "THE EDGE",
    author: "David Baldacci",
    rating: "4.6",
    thumbnail:
      "https://storage.googleapis.com/du-prd/books/images/9781538719916.jpg",
    releaseDate: "2023-11-09",
  },
  {
    id: 4,
    title: "THE LITTE LIAR",
    author: "Mitch Albom",
    rating: "4.7",
    thumbnail:
      "https://storage.googleapis.com/du-prd/books/images/9780062406651.jpg",
    releaseDate: "2023-11-14",
  },
  {
    id: 5,
    title: "THE EXCHANGE",
    author: "John Grisham",
    rating: "3.8",
    thumbnail:
      "https://storage.googleapis.com/du-prd/books/images/9780385548953.jpg",
    releaseDate: "2023-10-17",
  },
  {
    id: 6,
    title: "THE NARROW ROAD BETWEEN DESIRES",
    author: "Patrick Rothfuss",
    rating: "4",
    thumbnail:
      "https://storage.googleapis.com/du-prd/books/images/9780756419172.jpg",
    releaseDate: "2023-11-14",
  },
  {
    id: 7,
    title: "THE HEAVEN & EARTH GROCERY STORE",
    author: "James McBride",
    rating: "4.3",
    thumbnail:
      "https://storage.googleapis.com/du-prd/books/images/9780593422946.jpg",
    releaseDate: "2023-08-08",
  },
  {
    id: 8,
    title: "RESURRECTION WALK",
    author: "Michael Connelly",
    rating: "4.7",
    thumbnail:
      "https://storage.googleapis.com/du-prd/books/images/9780316563765.jpg",
    releaseDate: "2023-10-31",
  },
  {
    id: 9,
    title: "LESSONS IN CHEMISTRY",
    author: "Bonnie Garmus",
    rating: "4.3",
    thumbnail:
      "https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg",
    releaseDate: "2022-03-29",
  },
  {
    id: 10,
    title: "THE SECRET",
    author: "Lee Child & Andrew Child",
    rating: "4.2",
    thumbnail:
      "https://storage.googleapis.com/du-prd/books/images/9781984818584.jpg",
    releaseDate: "2023-10-24",
  },
  {
    id: 11,
    title: "DIRTY THIRTY",
    author: "Janet Evanovich",
    rating: "4.7",
    thumbnail:
      "https://storage.googleapis.com/du-prd/books/images/9781668003091.jpg",
    releaseDate: "2023-10-31",
  },
  {
    id: 12,
    title: "SYSTEM COLLAPSE",
    author: "Martha Wells",
    rating: "4.4",
    thumbnail:
      "https://storage.googleapis.com/du-prd/books/images/9781250826978.jpg",
    releaseDate: "2023-11-14",
  },
  {
    id: 13,
    title: "PRETTY BOYS ARE POISONOUS",
    author: "Megan Fox",
    rating: "4.6",
    thumbnail:
      "https://storage.googleapis.com/du-prd/books/images/9781668050415.jpg",
    releaseDate: "2023-11-07",
  },
  {
    id: 14,
    title: "HOLLY",
    author: "Stephen King",
    rating: "4.2",
    thumbnail:
      "https://storage.googleapis.com/du-prd/books/images/9781668016138.jpg",
    releaseDate: "2023-09-05",
  },
  {
    id: 15,
    title: "DEMON COPPERHEAD",
    author: "Barbara Kingsolver",
    rating: "4.5",
    thumbnail:
      "https://storage.googleapis.com/du-prd/books/images/9780063251922.jpg",
    releaseDate: "2022-10-18",
  },
  {
    id: 16,
    title: "The Hobbit (The Lord of the Rings)",
    author: "JRR Tolkien",
    rating: "4.2",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg",
    releaseDate: "1937-09-21",
  },
  {
    id: 17,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: "4.2",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
    releaseDate: "1813-01-27",
  },
  {
    id: 18,
    title: " His Dark Materials",
    author: "Philip Pullman",
    rating: "4.2",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442329494i/18116.jpg",
    releaseDate: "2000-11-01",
  },
  {
    id: 19,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    rating: "4.2",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1531891848i/11.jpg",
    releaseDate: "1979-10-12",
  },
  {
    id: 20,
    title: "Harry Potter and the Goblet of Fire",
    author: "JK Rowling",
    rating: "4.5",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554006152i/6.jpg",
    releaseDate: "2000-07-08",
  },
  {
    id: 21,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: "4.2",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg",
    releaseDate: "1960-07-11",
  },
  {
    id: 22,
    title: "Winnie the Pooh",
    author: "AA Milne",
    rating: "4.3",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1298440130i/99107.jpg",
    releaseDate: "1926-10-14",
  },
  {
    id: 23,
    title: "Nineteen Eighty-Four",
    author: "George Orwell",
    rating: "4.1",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1697849136i/163284678.jpg",
    releaseDate: "1949-06-08",
  },
  {
    id: 24,
    title: "The Lion, the Witch and the Wardrobe",
    author: "CS Lewis",
    rating: "4.2",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353029077i/100915.jpg",
    releaseDate: "1950-10-16",
  },
  {
    id: 25,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    rating: "4.1",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1557343311i/10210.jpg",
    releaseDate: "1847-10-15",
  },
  {
    id: 26,
    title: "Catch-22",
    author: "Joseph Heller",
    rating: "3.9",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463157317i/168668.jpg",
    releaseDate: "1961-11-10",
  },
  {
    id: 27,
    title: "Wuthering Heights",
    author: "Emily Brontë",
    rating: "3.9",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388212715i/6185.jpg",
    releaseDate: "1847-11-30",
  },
  {
    id: 28,
    title: "Birdsong",
    author: "Sebastian Faulks",
    rating: "4.1",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1349952101i/6259.jpg",
    releaseDate: "1993-09-27",
  },
  {
    id: 29,
    title: "Rebecca",
    author: "Daphne du Maurier",
    rating: "4.2",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386605169i/17899948.jpg",
    releaseDate: "1938-08-01",
  },
  {
    id: 30,
    title: "The Catcher in the Rye",
    author: "JD Salinger",
    rating: "3.8",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg",
    releaseDate: "1951-07-16",
  },
  {
    id: 31,
    title: "The Wind in the Willows",
    author: "Kenneth Grahame",
    rating: "4.0",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630642716i/5659.jpg",
    releaseDate: "1908-10-08",
  },
  {
    id: 32,
    title: "Great Expectations",
    author: "Charles Dickens",
    rating: "3.8",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631687432i/2623.jpg",
    releaseDate: "1860-11-30",
  },
  {
    id: 33,
    title: "Little Women",
    author: "Louisa May Alcott",
    rating: "4.1",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1562690475i/1934.jpg",
    releaseDate: "1867-12-31",
  },
  {
    id: 34,
    title: "Captain Corelli's Mandolin",
    author: "Louis de Bernières",
    rating: "4.0",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328102018i/578519.jpg",
    releaseDate: "1994-01-01",
  },
  {
    id: 35,
    title: "War and Peace",
    author: "Leo Tolstoy",
    rating: "4.2",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413215930i/656.jpg",
    releaseDate: "1866-12-31",
  },
  {
    id: 36,
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    rating: "4.3",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1551144577i/18405.jpg",
    releaseDate: "1936-06-30",
  },
];

exports.seed = async function (knex) {
  await knex("books_database").del(book_db);
  await knex("books_database").insert(book_db);
};
