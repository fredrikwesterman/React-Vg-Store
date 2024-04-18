const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());

//connecting to my server.
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "climbingstoreserver",
});

app.use(express.json());

//get all users.
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users;", (err, result) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(result);
    }
  });
});

//creating new users.
app.post("/users", (req, res) => {

  const { email, password } = req.body;

  db.query(
    "INSERT INTO users (email, password) VALUES (?,?)",
    [email, password],
    (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(result);
      }
    }
  );
});

app.post("/login", (req, res) => {

  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?;",
    [email, password],
    (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(result);
      }
    }
  );
});

//get all the products.
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products;", (err, result) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(result);
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
