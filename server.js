const PORT = 8081;
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./knexfile.js");
const knex = require("knex")(config);
const verifyJWT = require("./middleware/verifyJWT.js");
const cookieParser = require("cookie-parser");

//middleware
app.use(express.json());

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/register", require("./routes/register.js"));
app.use("/auth", require("./routes/auth.js"));
app.use("/refresh", require("./routes/refresh.js"));
app.use("/logout", require("./routes/logout.js"));

app.get("/", async (req, res) => {
  try {
    const data = await knex("books");
    res.send(data);
  } catch (error) {
    res.status(500).send("error occured while fetching books");
    console.log("does this work?", error);
  }
});

app.get("/search/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const data = await knex("books_database").where(
      "title",
      "like",
      `%${title}%`
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while searching for books");
  }
});

app.get("/details-and-reviews/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const bookId = Number(title);

    if (isNaN(bookId)) {
      res.status(400).send("Invalid book ID");
      return;
    }

    const bookDetails = await knex("books_database").where("id", bookId);

    const bookReviews = await knex("book_reviews").where("book_id", bookId);

    res.json({ details: bookDetails, reviews: bookReviews });
  } catch (error) {
    res
      .status(500)
      .send("Error occurred while fetching book details and reviews");
    console.log(error);
  }
});

app.use(verifyJWT);

app.post("/details-and-reviews/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const bookId = Number(title);

    if (isNaN(bookId)) {
      res.status(400).send("Invalid book ID");
      return;
    }

    const { review } = req.body;

    await knex("book_reviews").insert({ book_id: bookId, review });

    res.status(201).send("Review added successfully");
  } catch (error) {
    res.status(500).send("Error occurred while adding the review");
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
