var express = require('express');
module.exports = {
    "title": "Membership",
    "name": "membership",
    "app": function membership (config, db, site) {
        var app = express();
        
        app.set('views', __dirname + "/views");
        
        site.use("/static", express.static(__dirname + "/" + config.static_dir));
        
        app.get('/', function index (req, res) {
            res.render("frontpage");
        });
        
        return app;
    }
}

