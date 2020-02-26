const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    if (value === undefined) value = ' ';
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position > 0 && position <= this.array.length) {
      this.array.splice(position - 1, 1);
      return this;
    }
    else {
      this.array = [];
      throw Error('Invalid position');
    }
  },
  reverseChain() {
    this.array.reverse()
    return this;
  },
  finishChain() {
    let string = this.toString();
    this.array = [];
    return string;
  },
  toString() {
    let string = '( ' + this.array[0] + ' )';
    for (let i = 1; i < this.array.length; i++) {
      string += '~~( ' + this.array[i] + ' )';
    }
    return string;
  }
};

module.exports = chainMaker;
