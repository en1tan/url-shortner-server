const express = require('express');
const urlModel = require('../models/url-shortner');
const router = express.Router()
const healthCheck = require('./healthcheck.routes');

// HealthCheck
router.get('/', healthCheck)

router.get('/all', async (_req, res) => {
    try {
        await urlModel.find({}, (_err, urls) => {
            return res.status(200).json({ success: true, data: urls });
        });
    } catch (err) {
        return res.status(500).json({ success: false, msg: "An error occured. Please try again." });
    }
});

// Fetch corresponding url
router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    try {
        const {url} = await urlModel.findOne({ slug });
        console.log(url);
        return res.redirect(url);
    } catch (err) {
        return res.status(500).json({ success: false, msg: `Error occured. Please try again ${err}` });
    }
});

module.exports = router;