module.exports = {
  development: {
    database: {
      host: "mysql.vsisolucoes.com.br",
      port: "3306",
      name: "vsisolucoes74",
      dialect: "mysql",
      user: "vsisolucoes74",
      password: "V123456",
    },
  },
  production: {
    database: {
      host: process.env.DB_HOST,
      host: process.env.DB_PORT,
    },
  },
};
