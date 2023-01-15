
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    let newArr = [];
    if (matrix.length === 0) {
      return []
    }
    else {
      for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
          newArr = [...newArr,...matrix[i]]
        }
        else {
          newArr = [...newArr, ...matrix[i].reverse()]
        }
      }
      return newArr;
    }
}
