var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, element) {
  arr.unshift(element);
  return arr;
}

const destructivelyAddElementToBeginningOfArray = (arr, element) => {
  let newArr = arr;
  newArr.unshift(element);
   newArr;
}

const addElementToEndOfArray = (arr, element) => {
  let newArr = arr;
  newArr.push(element);
  return newArr;
}

const destructivelyAddElementToEndOfArray = (arr, element) => {
  arr.push(element);
  return arr;
}

const accessElementInArray = (arr, idx) => {
  return arr[idx];
}

const destructivelyRemoveElementFromBeginningOfArray = (arr) => {
  arr.shift();
  return arr;
}

const removeElementFromBeginningOfArray = (arr) => {
  return arr.slice(1);
}

const destructivelyRemoveElementFromEndOfArray = (arr) => {
   arr.pop();
   return arr
}

const removeElementFromEndOfArray = (arr) => {
  return arr.slice(0, arr.length - 1);
}
