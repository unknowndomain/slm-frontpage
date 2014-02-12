var express = require('express');
var _ = require("underscore");

module.exports = {
    "title": "Frontpage",
    "name": "frontpage",
    "app": function membership (config, db, site) {
        var app = express();
        _.extend(app.locals, site.locals);
        
        app.set('views', __dirname + "/views");
        
        site.use("/static", express.static(__dirname + "/" + config.static_dir));
        
        app.get('/', function index (req, res) {
            var user = res.locals.user;
            if (req.session.email && ((!user) || (!user.provided_details()))) {
                res.redirect("/membership");
            }
            else {
                res.render("frontpage");
            }
        });
        
        return app;
    }
}

