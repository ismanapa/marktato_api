const mongoose = require('mongoose');

class Connection {
  constructor(connectionString) {
    this.connectionString = connectionString;

    this.opts = {
      promiseLibrary: global.Promise,
      server: {
        auto_reconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000,
      },
      config: {
        autoIndex: true,
      },
    };
  }

  connect() {
    mongoose.connect(this.connectionString, this.opts)
      .then(() => {
        console.log('Database connection sucessful');
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

module.exports = Connection;
