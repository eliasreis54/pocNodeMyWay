const User = require('../models/User');

const createUsersWithMessages = async () => {
  await User.create(
    {
      name: 'rwieruch',
    },
  );
};

module.exports = {
  createUsersWithMessages,
}
