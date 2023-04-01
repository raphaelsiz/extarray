export class Vector2 extends Array {
    constructor(x,y) {
        if (x == undefined) return super(0,0);
        if (y == undefined) return super(x,0);
        return super(x,y);
    }
}
export class Vector3 extends Array {
    constructor(x,y,z) {
        if (x == undefined) return super(0,0,0);
        if (y == undefined) return super(x,0,0);
        if (z == undefined) return super(x,y,0);
        return super(x,y);
    }
}
Vector2.isVector2 = function(variable) {
    if (variable instanceof Vector2) return true;
    if (Array.isArray(variable) && variable.length === 2) return (!variable.filter(x => (typeof x != "number")).length)
    return false;
}
Vector3.isVector3 = function(variable) {
    if (variable instanceof Vector3) return true;
    if (Array.isArray(variable) && variable.length === 3) return (!variable.filter(x => (typeof x != "number")).length)
    return false;
}
Array.prototype.testing = function() {
    return "it works!"
}