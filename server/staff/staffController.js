'use strict';


exports.renderPartial = (req, res, next) => {
    let partialName = req.params.name;
    res.render('staff/views/partials/' + partialName);
};

exports.renderDirective = (req, res, next) => {
    let directiveName = req.params.name;
    res.render('staff/views/partials/directives/' + directiveName);
};