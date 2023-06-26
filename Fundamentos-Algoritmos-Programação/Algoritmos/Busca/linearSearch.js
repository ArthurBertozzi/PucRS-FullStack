function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i;
      }
    }
    return -1;
  }
  
  // Exemplo de uso
  const array = [5, 3, 8, 2, 1, 4];
  const target = 8;
  console.log(linearSearch(array, target));
  