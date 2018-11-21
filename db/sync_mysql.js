var MySql = require('sync-mysql');
        var connection_sync = new MySql({
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'db_api'
        });
        connection_sync.connect(function (err){
            if(err) throw err;
        });
        
        module.exports = connection_sync;