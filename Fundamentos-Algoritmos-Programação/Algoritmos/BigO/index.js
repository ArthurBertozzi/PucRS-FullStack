// O(1) - Complexidade constante
function printFirstElement(array) {
    console.log(array[0]);
  }
  
  // O(n) - Complexidade linear
  function printAllElements(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  
  // O(n^2) - Complexidade quadrática
  function printAllPairs(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        console.log(array[i] + ", " + array[j]);
      }
    }
  }
  
  // O(log n) - Complexidade logarítmica
  function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (array[mid] === target) {
        return mid;
      } else if (array[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return -1;
  }
  
 // O(n!) - Complexidade fatorial
function calculateFactorial(n) {
    if (n === 0) {
      return 1;
    }
    
    return n * calculateFactorial(n - 1);
  }
  