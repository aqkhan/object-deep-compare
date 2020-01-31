
# Deep compare
Compare javascript objects to determine whether they are an exact match or not. 

# Install
```
yarn add @alphasquad/object-deep-compare
```

# Usage
```
const compare = require('@alphasquad/object-deep-compare')

// OR

import compare from '@alphasquad/object-deep-compare'

const obj1 = { hello: 'world' }

const obj2 = { hello: 'world' }

const compare = compare(obj1, obj2)

console.log(compare) // true

```