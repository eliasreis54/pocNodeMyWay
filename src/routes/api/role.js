const router = require('express').Router();
const roleService = require('../../services/roleService');

router.get('/', (req, res, next) => {
  return roleService.findAll()
    .then(userCreated => res.status(302).send(userCreated))
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  return roleService.findRoleById(req.params.id)
    .then(userCreated => res.status(302).send(userCreated))
    .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  const { body } = req;
  return roleService.createRole(body)
    .then(userCreated => res.status(201).send(userCreated))
    .catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
  return roleService.deleteRole(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
});

module.exports = router;
