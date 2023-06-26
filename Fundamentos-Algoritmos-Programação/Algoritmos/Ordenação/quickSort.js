function quickSort(arr, left = 0, right = arr.length - 1) {
    if (arr.length > 1) {
      const index = partition(arr, left, right);
  
      if (left < index - 1) {
        quickSort(arr, left, index - 1);
      }
  
      if (index < right) {
        quickSort(arr, index, right);
      }
    }
    return arr;
  }
  
  function partition(arr, left, right) {
    const pivot = arr[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;
  
    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }
  
      while (arr[j] > pivot) {
        j--;
      }
  
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }
  
    return i;
  }
  
  // Exemplo de uso
  const array = [5, 3, 8, 2, 1, 4];
  console.log(quickSort(array));
  