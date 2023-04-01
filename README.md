```js
import 'extarray'
let array = [0,1,2];
array.functionHere()
```
> Important note! This only works with static imports. That means this doesn't work in commonJS's `import('extarray')` function. Your package has to be a module, too. In your `package.json`, you can include `"type": "module",` and that should fix it!
```js
import {Vector2} from 'extarray'
let position = new Vector2(0,1)
```
[Docs](https://cdn.jsdelivr.net/gh/raphaelsiz/extraray/out/index.html)