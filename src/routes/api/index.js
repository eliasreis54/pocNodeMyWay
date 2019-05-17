const express = require('express');

const router = express.Router();

router.use('/people', require('./people'));
router.use('/teams', require('./team'));
router.use('/roles', require('./role'));

module.exports = router;
