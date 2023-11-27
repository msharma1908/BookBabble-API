/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("books_database", function (table) {
    table.increments("id");
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
  return knex.schema.dropTable("books_database");
};
