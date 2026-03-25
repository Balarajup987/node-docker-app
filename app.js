const express = require('express');
const add = require('./math');

const app = express();

app.get('/', (req, res) => {
  const sum = add(2, 3);
  res.send(`Sum is: ${sum}`);
});

// Correct and consistent
app.listen(3000, '0.0.0.0', () => {
  console.log("Server running on port 3000");
});
