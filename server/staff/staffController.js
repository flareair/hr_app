'use strict';


exports.renderPartial = (req, res, next) => {
    let partialName = req.params.name;
    res.render('staff/views/partials/' + partialName);
};