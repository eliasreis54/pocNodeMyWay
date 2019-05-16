module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  Team.associate = function(models) {
    // associations can be defined here
  };
  return Team;
};
