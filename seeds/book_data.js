/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const fs = require("fs");
const express = require("express");
const app = express();
const book_data = [
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
];

exports.seed = async function (knex) {
  await knex("books").del(book_data);
  await knex("books").insert(book_data);
};
