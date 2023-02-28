const mssql = require("mssql");

let config = {
  user: "traineedb3",
  password: "oeu9NtLDJWbi0phM",
  server: "WIN-390Q81UT43Q\\SQLEXPRESS2017",
  database: "traineedb3",
  trustServerCertificate: true,
};

const pool = new mssql.ConnectionPool(config);

module.exports = pool;
