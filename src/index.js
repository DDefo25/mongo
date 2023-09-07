const express = require('express');
const mongoose = require('mongoose');

const errorMiddleware = require('./middleware/er404');
const booksApiRouter = require('./routes/api/books');

const app = express();
app.use(express.json())

app.use('/api/books', booksApiRouter);

app.use(errorMiddleware);


const PORT = process.env.PORT || 8989;
const MONGO_URL = process.env.MONGO_URL || "mongodb://root:pass@localhost:27017";
(async function (PORT, MONGO_URL) {
    try {
        await mongoose.connect(MONGO_URL);
        app.listen(PORT);
        console.log('server is listening: ' + PORT);
    } catch (e) {
        console.log(e)
    }
})(PORT, MONGO_URL)