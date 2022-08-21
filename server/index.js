const express = require('express');
const mongoose = require("mongoose");
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
// const bodyParser = require('body-parser');
dotenv.config();
const PORT = process.env.PORT || 5000;

const note = require("./routes/note");

app.use(note);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true },
    function (err) {
        if (err) {
            return console.log(err);
        } else {
            console.log("Mongoose connetcion - Ready state is:", mongoose.connection.readyState);
        }
    });

app.get('/', (request, response) => { response.send('api is running') })
    .listen(PORT, () => { console.log(`Server started on port ${PORT}`) })
    .on('error', (error) => { console.log(error) });