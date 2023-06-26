function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Troca o elemento atual com o elemento de valor mínimo encontrado
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
  }
  
  // Exemplo de uso
  const array = [5, 3, 8, 2, 1, 4];
  console.log(selectionSort(array));
  