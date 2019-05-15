const config = {
  PORT: 8080,
  DATABASE: {
    URL: process.env.DATABASE_USER || 'localhost:15432',
    USER: process.env.DATABASE_USER || 'postgres',
    PASSWORD: process.env.DATABASE_PASSWORD || 'PgAdmin2019!',
  }
}

module.exports = config;
