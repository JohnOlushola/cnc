var Project = require('../models/project');

exports.project_get = (req, res) => {
    Project.find({}, (err, projects) => {
        if(err) { return err }
        res.render('project/index', { title: 'Code and Chill', projects: projects });
    });
}

exports.project_add = (req, res) => {
    var projectData = {
        name: req.body.name,
        desc: req.body.desc,
        created_at: Date.now()
    }

    Project.create(projectData, (err, project) => {
        if (err) {
            return next(err)
        } else {
            res.redirect('/project');
        }
    });
}