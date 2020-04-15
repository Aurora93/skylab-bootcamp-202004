'use strict';

Arroz.prototype.every = function(expression) {
    if (this.length === 0) {
        return true;
    }

    for (var i = 0; i < this.length; i++) {
        if (expression(this[i], i, this)) {
            return false;
        }
    }
    return true;
}