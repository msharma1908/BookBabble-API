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
    title: "rowValue1",
    author: "rowValue1",
    rating: "rowValue1",
    thumbnail: "rowValue1",
    releaseDate: "rowValue1",
  },
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("books").del(book_data);
  await knex("books").insert(book_data);
};
