const Person = require('../models').Person;

const findAll = () => new Promise((resolve, reject) => {
  return Person.findAll()
    .then(people => resolve(people))
    .catch(err => reject(err));
});

const createPerson = data => new Promise((resolve, reject) => {
  return Person.create(data)
    .then(people => resolve(people))
    .catch(err => reject(err));
});

const findPersonById = personId => new Promise((resolve, reject) => {
  return Person.findAll({
    where: {
      id: personId,
    }
  })
    .then(person => resolve(person))
    .catch(err => reject(err));
});

const deletePerson = personId => new Promise((resolve, reject) => {
  return Person.destroy({
    where: {
      id: personId,
    }
  })
    .then(person => resolve(person))
    .catch(err => reject(err));
});

module.exports = {
  findAll, createPerson, findPersonById, deletePerson,
}
