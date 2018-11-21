module.exports = function(app){

    app.get('/redis_api',function(req,res){
        var note = {'Get All Content Async':'http://localhost:3000/redis_api/getContent/:id'}
res.json(note)
    }),
    app.get('/redis_api/getContent/:id',function(req,res){
        var connect_redis = require('./../../db/connect_redis'); 
        const id = req.params.id;
        connect_redis.get("okz:tags:content:"+id, function(err, reply) {
		res.json(JSON.parse(reply))
	})
        })
}
