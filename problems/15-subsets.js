/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

function subsets(array) {
  if (array.length === 0) {
    return [[]];
  } else {
    const firstElement = array[0];
    const rest = array.slice(1);
    const subsetsWithoutFirst = subsets(rest);
    const subsetsWithFirst = subsetsWithoutFirst.map(subset => [firstElement, ...subset]);
    return [...subsetsWithoutFirst, ...subsetsWithFirst];
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
