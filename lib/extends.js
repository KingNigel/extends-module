'use strict'
module.exports = function (children, parent) {
    for (var i in parent) 
    {
        if (children[i]){
           if(children.p)
              children.p[i] = parent[i];
           else{
              children.p={};
              children.p[i] = parent[i];
           }
        }
        else{
        children[i] = parent[i];
        }
    }
};