const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./Routers/sum');
const app = express();

app.use(bodyParser.urlencoded({ extended: false  }));

app.set('view engine', 'ejs');



app.use('/sum', userRouter);

const port = process.env.PORT || 3000;
console.log(`Server is listening on port ${port}`);
app.listen(port);