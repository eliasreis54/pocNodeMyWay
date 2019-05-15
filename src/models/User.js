const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.NUMBER,
    },
    user: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    cpf: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    RG: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.NUMBER,
    },
    team: {
      type: DataTypes.NUMBER,
    },
    address: {
      type: DataTypes.STRING,
    },
  });


  return User;
};

module.exports = user;
