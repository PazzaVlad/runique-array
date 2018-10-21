# Randomly get unique item from array

Randomly get unique (non-repeating) item from array that's never the same as the previous.

## Usage

```js
const RandomList = require('runique-array')

const list = ['some', 'items', 'in', 'list']

/**
 * Get random and unique item from array.
 */
const randomList = new RandomList(list)

randomList.getRandom() // -> 'items'
randomList.getRandom() // -> 'list'
randomList.getRandom() // -> 'some'

randomList.getRemainingLength() // -> 1

randomList.resetRemainingItems()

randomList.getRemainingLength() // -> 4

randomList.getRandom() // -> 'list'
randomList.getRandom() // -> 'items'
randomList.getRandom() // -> 'some'
randomList.getRandom() // -> 'in'
randomList.getRandom() // -> undefined (when we randomly get all items)

/**
 * Reset array when we get all items.
 */
const randomList2 = new RandomList(list,  { repeatLoop: true }) // Default false

randomList.getRandom() // -> 'list'
randomList.getRandom() // -> 'items'
randomList.getRandom() // -> 'some'
randomList.getRandom() // -> 'in'
randomList.getRandom() // -> 'some'
randomList.getRandom() // -> 'in'
randomList.getRandom() // -> 'list'


```

## License

MIT