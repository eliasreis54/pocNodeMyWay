const router = require('express').Router();
const userService = require('../../services/User');

router.get('/', (req, res) => {
  return res.status(200).json({ msg: 'oi' });
});

router.post('/', (req, res, next) => {
  return res.status(200).json({ msg: 'oi' });
});

module.exports = router;
