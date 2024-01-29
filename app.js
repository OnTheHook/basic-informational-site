const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./public/about.html", { root: __dirname });
});

app.get("/contact-me", (req, res) => {
  res.sendFile("./public/contact-me.html", { root: __dirname });
});

app.use((req, res) => {
  res.status(404).sendFile("./public/404.html", { root: __dirname });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
