/**
 * Created by sarahdoire on 7/28/15.
 */
var random = require('./random');
var dollars = require('./USD');

var conversion = function(min, max) {
    return dollars(random(min, max).toString());
};

var output = function() {
    return "Account balance: \n";
};

exports.conversion = conversion;
exports.output = output;