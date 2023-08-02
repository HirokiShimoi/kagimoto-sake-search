const express = require('express');
const router = express.Router();
const Sake = require('../models/sake');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function validatePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}


router.get('/',async (req,res) => {
    try {
        const sake = await Sake.find();
        res.json(sake);
   } catch (err) {
    res.status(500).json({ message: err.message});
   }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const sake = await Sake.findOne({ _id: id });
    console.log(id);
    console.log(sake);
    res.json(sake); 
});


router.post('/',async (req,res) => {
    const newSake = new Sake ({
        name: req.body.name,
        price : req.body.price,
        spicy : req.body.spicy,
        smell : req.body.smell,
        spec : req.body.spec,
        rice : req.body.rice,
        gift : req.body.gift,
        stock : req.body.stock,
        imgURL: req.body.imgURL,
        description: req.body.description,
    });

    try {
        const savedSake = await newSake.save();
        res.status(201).json(savedSake);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post("/login", async (req,res) => {
    const { username,password } = req.body;
    console.log(req.body);
    const user = await User.findOne({username});
    
    if (!user) {
        return res.status(400).json ({ message: "ユーザー名が間違えています"})
    }

    const validPassword = await validatePassword( password, user.password);
    if (!validPassword) {
        return res.status(400).json({ message: "パスワードが間違えています" })
    } 

    const token = jwt.sign({ _id:user._id }, 'your_jwt_secret')
    res.json({ user: user.username, token });

});

router.put('/:id', async (req,res) => {
    console.log("ID:", req.params.id);

    try {
        const updateSake = await Sake.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true});
        console.log('PUT request received for id:',req.body)
        if(!updateSake) {
            return res.status(404).json({ message: 'SORRY NOT SAKE FOUND'});
        }
        res.json (updateSake);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'サーバーエラー'})
    }
});





module.exports = router;