/** @description
 * testing
 */

/**@constructor */
/**
 * see {@link Vector2#isVector2}
 * @date 3/31/2023 - 11:54:30 PM
 *
 * @export
 * @class Vector2
 * @typedef {Vector2}
 * @extends {Array}
 * @namespace Vector2
 */
export class Vector2 extends Array {
    
    /**
     * Creates an instance of Vector2.
     * @param {number} x
     * @param {number} y
     */
    constructor(x,y) {
        if (x == undefined) return super(0,0);
        if (y == undefined) return super(x,0);
        return super(x,y);
    }
}

/**
 * Description placeholder
 * @date 4/1/2023 - 12:01:52 AM
 *
 * @export
 * @class Vector3
 * @typedef {Vector3}
 * @extends {Array}
 * @namespace Vector3
 */
export class Vector3 extends Array {

    /**
     * Creates an instance of Vector3.
     * @param {*} x
     * @param {*} y
     * @param {*} z
     */
    constructor(x,y,z) {
        if (x == undefined) return super(0,0,0);
        if (y == undefined) return super(x,0,0);
        if (z == undefined) return super(x,y,0);
        return super(x,y);
    }
}
/** @function isVector2
 * @memberof Vector2*/
Vector2.isVector2 = function(variable) {
    if (variable instanceof Vector2) return true;
    if (Array.isArray(variable) && variable.length === 2) return (!variable.filter(x => (typeof x != "number")).length)
    return false;
}
/** @function isVector3
 * @memberof Vector3 */
Vector3.isVector3 = function(variable) {
    if (variable instanceof Vector3) return true;
    if (Array.isArray(variable) && variable.length === 3) return (!variable.filter(x => (typeof x != "number")).length)
    return false;
}
/** @namespace Array */

Array.prototype.testing = function() {
    return "it works!"
}
/** @function  add
 * @memberof Array
*/
Array.prototype.add = function(value){
    let i = this.indexOf(value);
    if (i === -1) this.push(value);
}
/** @function remove
 * @memberof Array
*/
Array.prototype.remove = function(value) {
    let i = this.indexOf(value);
    if (i !== -1) this.splice(i,1);
}
/** @function vectorAdd
 * @memberof Array
*/
Array.prototype.vectorAdd = function(array) {
    if (Array.isArray(array)) {
        let newArray = [];
        for (let i = 0; i <= Math.min(this.length,array.length); i++) newArray[i] = this[i] + array[i];
        return newArray;
    }
}
Array.prototype.vectorMultiply = function(array) {

}