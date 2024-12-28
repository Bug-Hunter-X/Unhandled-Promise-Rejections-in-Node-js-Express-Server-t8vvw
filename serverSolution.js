const express = require('express');
const app = express();
app.get('/', (req, res) => {
  //Simulate a delay
  setTimeout(() => {
    try {
      //Simulate an error
      //const error = new Error('Something went wrong!');
      //throw error;
      res.send('Hello World!');
    } catch (error) {
      console.error('Error handling request:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 5000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});