'use strict'
module.exports = function (children, parent) {
    for (var i in parent) 
    {
        if (children[i])
            continue;
        children[i] = parent[i];
    }
};