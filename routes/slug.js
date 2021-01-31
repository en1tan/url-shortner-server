const express = require('express');
const nanoid = require('nanoid');
const urlModel = require('../models/url-shortner');
const router = express.Router()
const nanNumber = process.env.SLUG_NUM;

// Generate slug
router.post('/new', async (req, res) => {
    const { url } = req.body;
    const newUrl = new urlModel({
        slug: nanoid.nanoid(nanNumber),
        url: url.toLowerCase()
    });
    try {
        await newUrl.save();
        return res.status(201).json({ success: true, data: newUrl.slug });
    } catch (err) {
        return res.status(500).json({ success: false, msg: `Error occured. Please try again ${err}` });
    }
});

module.exports = router;