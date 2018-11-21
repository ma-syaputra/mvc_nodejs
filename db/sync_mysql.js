var MySql = require('sync-mysql');
        var connection_sync = new MySql({
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'db_api'
        });
        
        module.exports = connection_sync;