var express = require('express');
var _ = require("underscore");

module.exports = {
    "title": "Getting Started",
    "name": "frontpage",
    "app": function membership (config, db, site) {
        var app = express();
        _.extend(app.locals, site.locals);
        
        app.set('views', __dirname + "/views");
        
        site.use("/static", express.static(__dirname + "/" + config.static_dir));
        
        app.get('/', function index (req, res) {
            var user = res.locals.user;
            if (req.session.email && ((!user) || (!user.provided_details()))) {
                res.locals.flash("warning", "Details Required.", "Please enter your personal details to continue.");
                res.redirect("/membership");
            }
            else {
                res.render("frontpage");
            }
        });
        
        return app;
    }
}

