const router = require('express').Router();
const personService = require('../../services/peopleService');

router.get('/', (req, res, next) => {
  return personService.findAll()
    .then(userCreated => res.status(302).send(userCreated))
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  return personService.findPersonById(req.params.id)
    .then(userCreated => res.status(302).send(userCreated))
    .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  const { body } = req;
  return personService.createPerson(body)
    .then(userCreated => res.status(201).send(userCreated))
    .catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
  return personService.deletePerson(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
});
module.exports = router;
