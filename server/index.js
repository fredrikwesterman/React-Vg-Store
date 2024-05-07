const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require('bcrypt');

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

const hashingPassword = (password) => {
  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

const comparePasswords = (password, hashedPw) => {
  return bcrypt.compareSync(password, hashedPw)
}

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        if (result.length === 0) {
          res.status(401).json({ message: "Invalid email or password" });
        } else {
          const user = result[0];
          const hashedPw = user.password;

          if (comparePasswords(password, hashedPw)) {
            res.status(200).json({ message: "Login successful" });
          } else {
            res.status(401).json({ message: "Invalid email or password" });
          }
        }
      }
    }
  );
});

//creating new users.
app.post("/users", (req, res) => {

  const { email, password } = req.body;

  db.query(
    "INSERT INTO users (email, password) VALUES (?,?)",
    [email, hashingPassword(password)],
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

app.get("/orders", (req, res) => {
  db.query("SELECT * FROM orders;", (err, result) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(result);
    }
  });
});

app.post("/orders", (req, res) => {

  const { products, price } = req.body;

  db.query(
    "INSERT INTO orders (products, price) VALUES (?,?)",
    [products, price],
    (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(result);
      }
    }
  );
});

app.get("/categories", (req, res) => {
  db.query("SELECT * FROM categorys;", (err, result) => {
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
