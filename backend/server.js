require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URL;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());

app.get('/',(req,res) => {
    res.send('helloworld')
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
