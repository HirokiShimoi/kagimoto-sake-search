require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const sakeRouter = require('./routes/sake');
const uri = process.env.ATLAS_URI;
const app = express();
const PORT = process.env.PORT || 5000;

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});

// A Promise that gets rejected but the rejection is not caught anywhere
let myPromise = new Promise((resolve, reject) => {
  reject("Some error");
});


app.use(cors());
app.use(express.json());
app.use('/sake', sakeRouter);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});



