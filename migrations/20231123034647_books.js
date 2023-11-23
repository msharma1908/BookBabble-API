/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("books", function (table) {
    table.increments("id"); // pk, auto increment
    table.string("title");
    table.string("author");
    table.string("rating");
    table.string("thumbnail");
    table.string("releaseDate");
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("books");
};
