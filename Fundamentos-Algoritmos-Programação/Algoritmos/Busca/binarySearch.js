function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (array[mid] === target) {
        return mid;
      }
  
      if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }
  
  // Exemplo de uso
  const array = [1, 2, 3, 4, 5, 8];
  const target = 4;
  console.log(binarySearch(array, target));
  