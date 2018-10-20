'use strict'

/**
 * Random & Unique returns from array.
 */
module.exports = class RandomList {
  /**
   * @param {Array} list 
   * @param {object} config 
   * @param {boolean} config.repeatLoop = if no items are left in array it will start over again. 
   */
  constructor(list, config = { repeatLoop: false }) {
    if (!list) {
      return undefined
    }

    this.list = list
    this.config = config

    this.resetRemainingItems()
  }
  
  /**
   * @public
   * 
   * @returns {any} - randomly return item.
   */
  getRandom() {
    if (this.config.repeatLoop && this.indexes.length === 0) {
      this.resetRemainingItems()
    }

    const rand = Math.floor(Math.random() * this.indexes.length)
    const item = this.list[this.indexes[rand]]

    this.indexes.splice(rand, 1);

    return item;
  };

  /**
   * @public
   * 
   * @returns {void}
   */
  resetRemainingItems() {
    this.indexes = []
    let listLength = this.list.length

    while (listLength--) {
      this.indexes[this.indexes.length] = listLength
    }
  }

  /**
   * @public
   * 
   * @returns {number}
   */
  getRemainingLength() {
    return this.indexes.length
  }
}