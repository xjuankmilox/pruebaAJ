const mongoose = require('mongoose');
const dbURL = require('./properties').DB;

module.exports = () => {
  mongoose.connect(dbURL, { useNewUrlParser: true })
    .then(() => console.log(`Mongo esta conectado a ${dbURL}`))
    .catch(err => console.log(`La conexion contiene un error ${err}`))

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log(`Mongo esta desconectado`);
      process.exit(0)
    });
  });
}