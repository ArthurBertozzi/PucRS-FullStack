function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Troca os elementos de posição
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  
  // Exemplo de uso
  const array = [5, 3, 8, 2, 1, 4];
  console.log(bubbleSort(array));
  