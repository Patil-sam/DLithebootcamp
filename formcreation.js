const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/registration.html');
});

app.post('/register', (req, res) => {
  const { name, rollNumber, collegeName, email, password } = req.body;
  
  // You can handle the registration logic here
  
  console.log(`Name: ${name}`);
  console.log(`Roll Number: ${rollNumber}`);
  console.log(`College Name: ${collegeName}`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  
  res.send('Registration successful!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
