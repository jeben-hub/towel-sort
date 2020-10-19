module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let rez_arr = [], temp = [];
  matrix.forEach((arr, index) => {
  	temp = index % 2 == 0 ? arr : arr.reverse();
  	temp.forEach(el => rez_arr.push(el));
  });
  return rez_arr;
}
