const express = require('express');

const router = express.Router()
router.get('/', async (_req, res, _next) => {
    // Check for the uptime
    const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    };
    try {
        res.send(healthcheck)
    } catch (err) {
        healthcheck.message = e;
        res.status(503).send();
    }
});

module.exports = router;