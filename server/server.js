const path = require('path');
const express = require('express');
const userRouter = require('./routes/userRouter')

const app = express();

const PORT = 3000;


app.use(express.json());
// app.use(express.urlencoded({ extended: true })); //MAYBE COMMENT OUT???

console.log('Hello')
app.use('/api', userRouter);


app.use((req, res) => res.status(404).send('Page not found'));

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
  
  module.exports = app;