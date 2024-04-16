const express = require('express');
const app = express();

const userList = [
  
]

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.get('/users', (req, res) => {
  res.json(userList);
});

app.post('/users', (req, res) => {
  const newUser = req.body
  userList.push(newUser)
  res.json(userList)
})

app.get('/products', (req, res) => {
  res.send('The products');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});