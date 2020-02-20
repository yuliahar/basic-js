module.exports = function countCats(matrix) {
  let count = 0;
  for (let array of matrix) {
    array.forEach(element => {if (element === '^^') count++;});
  }
  return count;
};
