const assert = require('assert').strict
const RandomList = require('./../index')

const list = ['some', 'items', 'in', 'list']

/**
 * @todo протестить
 * 5. если сместо массива - другая хрень
 */

describe('Main', function() {
	it('Always return unique items', function() {
		for (let i = 0; i < 1000; i++) {
			const randomList = new RandomList(list)
			const newArr = []
			newArr.push(randomList.getRandom())
			newArr.push(randomList.getRandom())
			newArr.push(randomList.getRandom())
			newArr.push(randomList.getRandom())

			assert.deepEqual(list.sort(), newArr.sort())
		}
	})

	it('Count ramaining items', function() {
		for (let i = 0; i < 100; i++) {
			const randomList = new RandomList(list)
			randomList.getRandom()
			randomList.getRandom()

			assert.deepEqual(randomList.getRemainingLength(), 2)
		}
	})

	it('Reset ramaining items', function() {
		for (let i = 0; i < 100; i++) {
			const randomList = new RandomList(list)
			randomList.getRandom()
			randomList.getRandom()

			randomList.resetRemainingItems()

			assert.deepEqual(randomList.getRemainingLength(), 4)

			const newArr = []
			newArr.push(randomList.getRandom())
			newArr.push(randomList.getRandom())
			newArr.push(randomList.getRandom())
			newArr.push(randomList.getRandom())

			assert.deepEqual(list.sort(), newArr.sort())
		}
	})

	it('Repeat when no items are left', function() {
		const randomList = new RandomList(list, { repeatLoop: true })
		const newArr = []
		for (let i = 0; i < 100; i++) {
			newArr.push(randomList.getRandom())
		}

		assert.deepEqual(newArr.includes(undefined), false)
	})
})
