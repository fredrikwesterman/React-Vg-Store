const express = require("express");
const app = express();
const mysql = require("mysql");
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "storeserver",
});

app.use(express.json());

app.get("/users", (req, res) => {
  db.query("SELECT * FROM storeserver.users;", (err, result) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(result);
    }
  });
});

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

app.get("/products", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
