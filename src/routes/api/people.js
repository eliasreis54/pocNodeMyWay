const router = require('express').Router();
const user = require('../../models').User;

router.get('/', (req, res) => {
  return user.findAll()
  .then(userCreated => res.status(201).send(userCreated))
  .catch(err => res.status(400).send(err));
});

router.post('/', (req, res, next) => {
  return user.create({
    name: "elias Reis"
  })
  .then(userCreated => res.status(201).send(userCreated))
  .catch(err => res.status(400).send(err));
});

module.exports = router;
