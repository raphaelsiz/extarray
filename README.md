# extarray
Extended array functionality. Work in progress, but stable. Eventually there will be more functions and classes to use.
## Added functions for Array and Array.prototype
Check if an array only has values of allowed type(s)
* `Array.isAllType(array,type | types)`

Push value if it doesn't exist or remove it if it does
* `Array.prototype.add(value)`
* `Array.prototype.remove(value)`
* `Array.prototype.toggle(value)`

Do arithmetic with vectors
* `Array.prototype.vectorAdd(otherArray)`
* `Array.prototype.vectorMultiply(otherArray)`
> Note: vectorAdd works with strings as well (although strings like "1" + "2" will be added into "12"). vectorMultiply works with strings only if they can be parsed into numbers, and then it multiplies them normally. I recommend only using numbers with both, but you do you.

> Also note that vectorAdd and vectorMultiply return a new array rather than mutating the array. This means if you want to set an array to itself plus another one you'll have to do something along the lines of `array = array.vectorAdd(otherArray)` but you can also use both functions to create new arrays without fear of messing up your data.

[Docs for Array](https://cdn.jsdelivr.net/gh/raphaelsiz/extraray/out/Array.html)
### Usage
If you only want to use the above functions and don't need the extra classes, it's really simple:
```js
import 'extarray'
let array = [0,1,2];
Array.isAllType(array,"number") // > true
array.add(3) // > array = [0,1,2,3]
array.vectorMultiply([0,2,4,6]) // > [0,2,8,18]
```
> Important note! This only works with static imports. That means this doesn't work in commonJS's `import('extarray')` function. Your package has to be a module, too. In your `package.json`, you can include `"type": "module",` and that should fix it!
## New Classes
So far, I've only added Vector2 and Vector3. Both are just arrays of numbers at that specific length.
```js
import {Vector2} from 'extarray'
let position = new Vector2(0,1) // > Vector2 [0,1]
Array.isArray(position) // > true
Vector2.isVector2(position) // > true
```
[Docs for Vector2](https://cdn.jsdelivr.net/gh/raphaelsiz/extraray/out/Vector2.html)

[Docs for Vector3](https://cdn.jsdelivr.net/gh/raphaelsiz/extraray/out/Vector3.html)