var express = require('express');
var router = express.Router();
const urlRouter = require('./url.routes');
const slugRouter = require('./slug');
const healthCheck = require('./healthcheck.routes')
const app = require('../app');

router.use('/', urlRouter);
router.use('/slug', slugRouter);
router.use('/healthcheck', healthCheck);



module.exports = router;
