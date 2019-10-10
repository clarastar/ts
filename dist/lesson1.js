"use strict";
function identity(arg) {
    return arg;
}
identity('string');
identity(3);
function identity1(arg) {
    return 3;
}
identity1('number');
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
let myIdentity = identity;
let myIdentity1 = identity;
//# sourceMappingURL=lesson1.js.map