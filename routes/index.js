var express = require('express');
var router = express.Router();
const urlRouter = require('./url');
const slugRouter = require('./slug');

router.use('/', urlRouter);
router.use('/slug', slugRouter);



module.exports = router;
