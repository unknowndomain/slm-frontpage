var express = require('express');
var _ = require("underscore");

module.exports = {
    "title": "Membership",
    "name": "membership",
    "app": function membership (config, db, site) {
        var app = express();
        _.extend(app.locals, site.locals);
        
        app.set('views', __dirname + "/views");
        
        site.use("/static", express.static(__dirname + "/" + config.static_dir));
        
        app.get('/', function index (req, res) {
            res.render("frontpage");
        });
        
        return app;
    }
}

