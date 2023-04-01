/** @description
 * testing
 */

/**@constructor */
/**
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
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    constructor(x,y,z) {
        if (x == undefined) return super(0,0,0);
        if (y == undefined) return super(x,0,0);
        if (z == undefined) return super(x,y,0);
        return super(x,y);
    }
}
/** @function isVector2
 * @memberof Vector2
 * @param {*} variable - Variable to determine type of*/
Vector2.isVector2 = function(variable) {
    if (variable instanceof Vector2) return true;
    if (Array.isArray(variable) && variable.length === 2) return (!variable.filter(x => (typeof x != "number")).length)
    return false;
}
/** @function isVector3
 * @memberof Vector3 
 * @param {*} variable - Variable to determine type of*/
Vector3.isVector3 = function(variable) {
    if (variable instanceof Vector3) return true;
    if (Array.isArray(variable) && variable.length === 3) return (!variable.filter(x => (typeof x != "number")).length)
    return false;
}
/** @namespace Array */
/** @function isAllType 
 * @description Determines whether or not all elements in an array have a specific type, or a type within a set of options.
 * @memberof Array
 * @param {Array} array - Array with values to determine type of
 * @param {String | Array<String>} type - type or types that the values should all be in order to return true
*/
Array.isAllType = function(array,type) {
    if (Array.isArray(array)) {
        if (Array.isArray(type)) {
            array.map(val=>{
                if (!type.includes(typeof val)) return false;
            })
            return true;
        }
        array.map(val=>{
            if (typeof val != type) return false;
        });
        return true;
    }
    return false;
}
/** @function  add
 * @description Pushes a value to the array if not yet present
 * @memberof Array
 * @param {*} value - the value to add to the array
*/
Array.prototype.add = function(value){
    let i = this.indexOf(value);
    if (i === -1) this.push(value);
}
/** @function remove
 * @description Removes a value from the array if present (without breaking anything if not)
 * @memberof Array
 * @param {*} value - value to remove from the array
*/
Array.prototype.remove = function(value) {
    let i = this.indexOf(value);
    if (i !== -1) this.splice(i,1);
}
/** @function toggle
 * @description Toggles whether or not the array contains this value
 * @memberof Array
 * @param {*} value - value to toggle
 */
Array.prototype.toggle = function(value) {
    let i = this.indexOf(value);
    (i == -1) ? this.push(value) : this.splice(i,1);
}
/** @function vectorAdd
 * @memberof Array
 * @param {Array<String | number>} array - An array of strings or numbers to add to the "vector."
 * @returns {Array<String | number>}
*/
Array.prototype.vectorAdd = function(array) {
    if (Array.isArray(array)) {
        let newArray = [];
        for (let i = 0; i < Math.min(this.length,array.length); i++) newArray[i] = this[i] + array[i];
        if (this instanceof Vector2) return new Vector2(...newArray)
        if (this instanceof Vector3) return new Vector3(...newArray)
        return newArray;
    }
    else console.error("TypeError: array param must be of type Array")
}
/** @function vectorMultiply
 * @memberof Array
 * @param {Array<number>} array - Another vector to add to the "vector."
 * @returns {Array | Vector2 | Vector3}
*/
Array.prototype.vectorMultiply = function(array) {
    if (Array.isArray(array)) {
        if (Array.isAllType(this,"number") && Array.isAllType(array,"number")) {
            let newArray = [];
            for (let i = 0; i < Math.min(this.length,array.length); i++) newArray[i] = this[i] * array[i];
            if (this instanceof Vector2) return new Vector2(...newArray)
            if (this instanceof Vector3) return new Vector3(...newArray)
            return newArray;
        }
        else console.error("Both arrays must be of all numbers!")
    }
    else console.error("TypeError: array param must be of type Array")
}