module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    user: DataTypes.STRING,
    password: DataTypes.STRING,
    CPF: DataTypes.STRING,
    email: DataTypes.STRING,
    RG: DataTypes.STRING,
    fullAddress: DataTypes.STRING,
  }, {});
  Person.associate = function(models) {
    Person.belongsTo(models.Role);
    Person.belongsTo(models.Team);
  };
  return Person;
};
