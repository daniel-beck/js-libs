

var handlebars = {};

require('jenkins-modules').import('handlebars:handlebars3')
    .then(function(handlebars3) {
        for (var member in handlebars3) {
            handlebars[member] = handlebars3[member];
        }
    });

module.exports = handlebars;
