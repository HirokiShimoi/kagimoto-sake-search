const express = require('express');
const router = express.Router();
const Sake = require('../models/sake');

router.get('/',async (req,res) => {
    try {
        const sake = await Sake.find();
        res.json(sake);
   } catch (err) {
    res.status(500).json({ message: err.message});
   }
});

router.get ('/:id',async (req,res) => {
    const { id } = req.params;
    console.log(req.params)
    const sake = await Sake.findById(id);
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



module.exports = router;