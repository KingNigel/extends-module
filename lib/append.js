'use strict'

module.exports = function (children,parentName,parent) {
    parent=arguments[arguments.length - 1];
    if (!parentName || typeof parentName === 'object') {
        parentName="parent";
    } else if (typeof parentName !== 'string') {
        throw new Error("参数异常");
    }
    for (var i in parent) 
    {
        if (children[i]){
           if(!children[parentName]||typeof children[parentName] !== 'object'){
              children[parentName]={};
           }
           children[parentName][i] = parent[i];
        }
        else{
        children[i] = parent[i];
        }
    }
};