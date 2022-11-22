const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// design file
app.use(express.static("public"));
app.set("view engine", "ejs");

// routers
app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/faq", (req, res) => {
  res.render("pages/faq");
});

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

app.get("/dvaitaAdvaita", (req, res) => {
  res.render("pages/dvaitaAdvaita");
});

app.get("/history", (req, res) => {
  res.render("pages/history");
});

// server listening
app.listen(PORT, () => {
  console.log(`The app is listening on port: http://localhost:${PORT}`);
});
