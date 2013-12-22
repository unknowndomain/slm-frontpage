var express = require('express');
module.exports = {
    "title": "Membership",
    "name": "membership",
    "app": function membership (config, db, site) {
        var app = express();
        
        app.set('views', __dirname + "/views")
        
        app.get('/', function index (req, res){
            res.render("frontpage");
        });
        
        return app;
    }
}

