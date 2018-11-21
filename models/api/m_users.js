var connect_mysql_sync = require('./../../db/sync_mysql'); 
var connect_mysql_async = require('./../../db/async_mysql'); 
module.exports = {    
    get_user: function() {
      const data_user = connect_mysql_sync.query("SELECT*FROM m_users");
      return data_user;
    },
    get_userbyid: function(id) {
        const userId = connect_mysql_sync.query("SELECT*FROM m_users where id="+id);
        return userId;
      },
    get_user_async: function() {
        connect_mysql_async.query('SELECT*FROM m_users', function (error, results, fields) {
            if (error) throw error;
    console.log(results);
          });
      }
  };


  