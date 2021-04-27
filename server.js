const express = require('express');
const PORT = process.env.Port || 6000;

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome All!");
});

app.get("/favorite-food", (req, res) => {
  res.send("Pizza");
});

app.get("/favorite-movie", (req, res) => {
  res.send("Harry Potter");
});

app.get("/about-me", (req, res) => {
  res.send("I am an IT Professional and Developer");
});

app.get("/contact", (req, res) => {
  res.send("Email");
});

app.listen(PORT, () => {
  console.log(`Express server is listening on port 6000`);
})