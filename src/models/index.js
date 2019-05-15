const Sequelize = require('sequelize');
const { DATABASE } = require('../configs/config');
module.exports = app =>{
  const sequelize = new Sequelize(
    DATABASE.URL,
    DATABASE.USER,
    DATABASE.PASSWORD,
    {
      dialect: 'postgres',
    },
  );
  const db = {
    sequelize,
    models: {}
  }
  const dir = path.join(__dirname, 'models');
  fs.readdirSync(dir).forEach(file =>{
    const modeldir = path.join(dir, file);
    const model = sequelize.import(modeldir);
    db.models[model.name] = model;
  });

  Object.keys(db.models).forEach(key=>{
    if (db.models[key].hasOwnProperty('associate')){
      db.models[key].associate(db.models);
    }
  })
  return db;
}
