const express = require('express');
const BodyParser = require('body-parser');
const { PORT } = require('./configs/config');
const sequelize = require('./models').sequelize;

const app = express();

app.use(BodyParser.json());

// Routes
app.use(require('./routes'));

app.use((err, _req, res, _next) => {
  if (err) {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  }
});

sequelize.sync({
  force: true
}).done(() => {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
});
