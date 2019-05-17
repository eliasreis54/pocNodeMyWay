const router = require('express').Router();
const teamService = require('../../services/teamService');

router.get('/', (req, res, next) => {
  return teamService.findAll()
    .then(userCreated => res.status(302).send(userCreated))
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  return teamService.findTeamById(req.params.id)
    .then(userCreated => res.status(302).send(userCreated))
    .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  const { body } = req;
  return teamService.createTeam(body)
    .then(userCreated => res.status(201).send(userCreated))
    .catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
  return teamService.deleteTeam(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
});

module.exports = router;
