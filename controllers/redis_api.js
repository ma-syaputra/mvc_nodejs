module.exports = function(app){

    app.get('/redis_api',function(req,res){
    res.json('API Active !')
    }),
    
    app.get('/redis_api/:id',function(req,res){
        var connect_redis = require('./../db/connect_redis'); 
        const id = req.params.id;
	    connect_redis.get("okz:tags:content:"+id, function(err, reply) {
		res.json(JSON.parse(reply))
        });
    })
}