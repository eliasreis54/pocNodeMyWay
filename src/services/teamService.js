const Team = require('../models').Team;

const findAll = () => new Promise((resolve, reject) => {
  return Team.findAll()
    .then(team => resolve(team))
    .catch(err => reject(err));
});

const createTeam = data => new Promise((resolve, reject) => {
  return Team.create(data)
    .then(team => resolve(team))
    .catch(err => reject(err));
});

const findTeamById = TeamId => new Promise((resolve, reject) => {
  return Team.findAll({
    where: {
      id: TeamId,
    }
  })
    .then(Team => resolve(Team))
    .catch(err => reject(err));
});

const deleteTeam = TeamId => new Promise((resolve, reject) => {
  return Team.destroy({
    where: {
      id: TeamId,
    }
  })
    .then(Team => resolve(Team))
    .catch(err => reject(err));
});

module.exports = {
  findAll, createTeam, findTeamById, deleteTeam,
}
