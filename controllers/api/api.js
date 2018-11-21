module.exports = function(app){

    app.get('/api',function(req,res){
    var note = {'Get All Content Async':'http://localhost:3000/api/getUser_async',
                'Get All Content Sync':'http://localhost:3000/api/getUser',
                'Get ById':'http://localhost:3000/api/getUser/:id'}
    res.json(note)
    }),

    app.get('/api/getUser',function(req,res){
            var m_user = require('../../models/api/m_users');
            const allUser = m_user.get_user();
            var convert = JSON.stringify(allUser);
            res.json(JSON.parse(convert))
        }),

    app.get('/api/getUser_async',function(req,res){
        var connect_mysql_async = require('../../db/async_mysql'); 
        connect_mysql_async.query('SELECT*FROM m_users', function (error, results, fields) {
            if (error) throw error;
                res.json(results);
            })
        }),

         app.get('/api/getUser/:id',function(req,res){
            const id = req.params.id;
            var m_user = require('../../models/api/m_users');
            const UserId = m_user.get_userbyid(id);
            var convert = JSON.stringify(UserId);
            res.json(JSON.parse(convert))
        })
}
