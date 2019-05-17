const Role = require('../models').Role;

const findAll = () => new Promise((resolve, reject) => {
  return Role.findAll()
    .then(role => resolve(role))
    .catch(err => reject(err));
});

const createRole = data => new Promise((resolve, reject) => {
  return Role.create(data)
    .then(role => resolve(role))
    .catch(err => reject(err));
});

const findRoleById = RoleId => new Promise((resolve, reject) => {
  return Role.findAll({
    where: {
      id: RoleId,
    }
  })
    .then(Role => resolve(Role))
    .catch(err => reject(err));
});

const deleteRole = RoleId => new Promise((resolve, reject) => {
  return Role.destroy({
    where: {
      id: RoleId,
    }
  })
    .then(Role => resolve(Role))
    .catch(err => reject(err));
});

module.exports = {
  findAll, createRole, findRoleById, deleteRole,
}
