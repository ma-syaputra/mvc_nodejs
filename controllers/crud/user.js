module.exports = function(app){

    app.get('/user',function(req,res){
    res.json('Crud Controller OK !')
    }),
    app.get('/',function(req,res){
        var connect_mysql = require('../../models/api/m_users');
        const allUser = connect_mysql.get_user();
        res.render('user/list',{users:allUser}) 
    }),
    app.get('/user/update/:id',function(req,res){
        var m_user = require('../../models/api/m_users'); 
        const id = req.params.id;
        const data_user = m_user.listing_user(id);
        console.log(data_user[0].id);
        res.render('user/edit',{users:data_user}) 
    })
}
