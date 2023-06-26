
class Pilha {
    constructor() {
      this.items = [];
    }
  
    // Adicionar um elemento ao topo da pilha
    push(element) {
      this.items.push(element);
    }
  
    // Remover o elemento do topo da pilha
    pop() {
      if (this.isEmpty()) {
        return "A pilha está vazia";
      }
      return this.items.pop();
    }
  
    // Retorna o elemento do topo da pilha, sem removê-lo
    peek() {
      if (this.isEmpty()) {
        return "A pilha está vazia";
      }
      return this.items[this.items.length - 1];
    }
  
    // Verifica se a pilha está vazia
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Retorna o tamanho da pilha
    size() {
      return this.items.length;
    }
  
    // Limpa a pilha
    clear() {
      this.items = [];
    }
  }
  


  // Exemplo de uso da classe Pilha
  const minhaPilha = new Pilha();
  minhaPilha.push(1);
  minhaPilha.push(2);
  minhaPilha.push(3);
  
  console.log(minhaPilha.size());  // Saída: 3
  console.log(minhaPilha.peek());  // Saída: 3
  
  console.log(minhaPilha.pop());   // Saída: 3
  console.log(minhaPilha.pop());   // Saída: 2
  
  console.log(minhaPilha.size());  // Saída: 1
  
  minhaPilha.clear();
  
  console.log(minhaPilha.isEmpty());  // Saída: true
  