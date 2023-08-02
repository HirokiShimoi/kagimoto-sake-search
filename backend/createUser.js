require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user');
const uri = process.env.ATLAS_URI;

async function createUser() {
    // Password encryption
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('kinta4701', salt);

    // User creation
    const user = new User({
        username: 'kagimoto',
        password: hashedPassword
    });

    // Saving user
    await user.save();
    console.log("User created successfully!");
    mongoose.connection.close();
}

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('open', () => {
  console.log("Connected to MongoDB database...");
  createUser();
});
