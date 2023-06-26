
class MeuSet {
    constructor() {
      this.set = new Set();
    }
  
    // Adicionar um elemento ao conjunto
    adicionar(elemento) {
      this.set.add(elemento);
    }
  
    // Remover um elemento do conjunto
    remover(elemento) {
      this.set.delete(elemento);
    }
  
    // Verificar se um elemento existe no conjunto
    verificar(elemento) {
      return this.set.has(elemento);
    }
  
    // Retornar o tamanho do conjunto
    tamanho() {
      return this.set.size;
    }
  
    // Limpar o conjunto
    limpar() {
      this.set.clear();
    }
  }
  
  // Exemplo de uso da classe MeuSet
  const meuSet = new MeuSet();
  meuSet.adicionar("elemento1");
  meuSet.adicionar("elemento2");
  meuSet.adicionar("elemento3");
  
  console.log(meuSet.tamanho());   // Saída: 3
  console.log(meuSet.verificar("elemento2"));   // Saída: true
  
  meuSet.remover("elemento1");
  
  console.log(meuSet.verificar("elemento1"));   // Saída: false
  console.log(meuSet.tamanho());   // Saída: 2
  
  meuSet.limpar();
  
  console.log(meuSet.tamanho());   // Saída: 0
  