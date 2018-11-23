var url = require('url') ;
module.exports = function(app){

    app.get('/user',function(req,res){
    res.json('Crud Controller OK !')
    }),
    app.get('/',function(req,res){
        var connect_mysql = require('../../models/api/m_users');
        const allUser = connect_mysql.get_user();
        res.render('user/list',{users:allUser}) 
    }),
    app.get('/user/pagination',function(req,res){
        var connect_mysql = require('../../models/api/m_users');
        const allUser = connect_mysql.get_user();
        var perpage = 5
        var countTotal = allUser.length
        var totalpage = Math.ceil(countTotal/perpage)
        var new_obj = {};
        allUser.forEach((allUser, index) => {
            console.log(allUser+',');
          });
        console.log(new_obj);
        // allUser.forEach(function(element) {
        //     console.log(id);
        //   });
        // console.log(allUser);
        // res.render('user/list',{users:allUser}) 
    }),
    app.get('/user/update/:id',function(req,res){
        var m_user = require('../../models/api/m_users'); 
        const id = req.params.id;
        const data_user = m_user.listing_user(id);
        console.log(data_user[0].id);
        res.render('user/edit',{users:data_user}) 
    }),
    app.get('/user/add',function(req,res){
        res.render('user/add',{title:'Add User'}) 
    }),
    app.post('/user/add_post',function(req,res){
        var m_user = require('../../models/api/m_users'); 
        if (!req.body) return res.sendStatus(400)
        id = req.body.id;
        username = req.body.username;
        name = req.body.name;
        const insert_user = m_user.insert_user(username,name);
        var hostname = req.headers.host;
        res.redirect('http://'+hostname);
        // assert(result[0].solution === 2); 
      
    }),
    app.get('/user/flash',function(req,res){
        res.render('user/add',{title:'Add User'}) 
    }),
    app.post('/user/update_post',function(req,res){
        var m_user = require('../../models/api/m_users'); 
        if (!req.body) return res.sendStatus(400)
        id = req.body.id;
        username = req.body.username;
        name = req.body.name;
        const update_user = m_user.update_user(id,username,name);
        var hostname = req.headers.host;
        // var pathname = url.parse(req.url).pathname;
        res.redirect('http://'+hostname);
        // assert(result[0].solution === 2); 
      
    })
}
