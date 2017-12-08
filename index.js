function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var replaceIndex = function replaceIndex(array, index, replaceWith) {
  return [].concat(_toConsumableArray(array.slice(0, index)), [replaceWith], _toConsumableArray(array.slice(index + 1, array.length)));
};


module.exports = replaceIndex;
