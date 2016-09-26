'use strict'
module.exports = function(parent){
var children = {};
Object.keys(parent).forEach(function (key) {
  children[key] = parent[key]
})

return children;
}
