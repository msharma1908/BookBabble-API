const PORT = 8081;
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
// const params = require("params");

// app.get("/", (req, res) => {
//   res.send("made it to server");
// });

app.use(cors());

app.get("/", (req, res) => {
  axios
    .get(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=63h58pjQAKU24nHAczQ33xxKBTLWWOBD"
    )
    .then((response) => {
      //   console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("error occured while fetching books");
    });
});

app.get("/search/:searchTerm", (req, res) => {
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${req.params.searchTerm}`
    )
    .then((response) => {
      //   console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("error occured while searching books");
    });
});

app.get("/search/isbn/:isbn", (req, res) => {
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${req.params.isbn}`
    )
    .then((response) => {
      //   console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("error occured while searching books");
    });
});
//   res.send(response.data);
//   res.send("made it to server");
// });

// https://www.googleapis.com/books/v1/volumes?q=dune

app.listen(PORT, () => {
  console.log("Server listening on Port8081");
});
