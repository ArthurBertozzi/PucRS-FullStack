
class Fila {
    constructor() {
      this.items = [];
    }
  
    // Adicionar um elemento ao final da fila
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remover o elemento do início da fila
    dequeue() {
      if (this.isEmpty()) {
        return "A fila está vazia";
      }
      return this.items.shift();
    }
  
    // Retorna o elemento do início da fila, sem removê-lo
    front() {
      if (this.isEmpty()) {
        return "A fila está vazia";
      }
      return this.items[0];
    }
  
    // Verifica se a fila está vazia
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Retorna o tamanho da fila
    size() {
      return this.items.length;
    }
  
    // Limpa a fila
    clear() {
      this.items = [];
    }
  }
  
  // Exemplo de uso da classe Fila
  const minhaFila = new Fila();
  minhaFila.enqueue(1);
  minhaFila.enqueue(2);
  minhaFila.enqueue(3);
  
  console.log(minhaFila.size());   // Saída: 3
  console.log(minhaFila.front());  // Saída: 1
  
  console.log(minhaFila.dequeue());   // Saída: 1
  console.log(minhaFila.dequeue());   // Saída: 2
  
  console.log(minhaFila.size());   // Saída: 1
  
  minhaFila.clear();
  
  