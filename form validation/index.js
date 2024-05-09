const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/registration', (req, res) => {
  res.sendFile(__dirname + '/registration.html');
});


app.post('/register', (req, res) => {
  const { name, rollNumber, collegeName, email, password } = req.body;

  
  res.send('Registration successful!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
