/**
 * Created by sarahdoire on 7/28/15.
 */
var random = function (min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};

module.exports = random;