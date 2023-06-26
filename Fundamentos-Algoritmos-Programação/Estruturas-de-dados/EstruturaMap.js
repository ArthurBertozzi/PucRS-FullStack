
class MeuMap {
    constructor() {
      this.map = new Map();
    }
  
    // Adicionar um par chave-valor ao mapa
    adicionarChaveValor(chave, valor) {
      this.map.set(chave, valor);
    }
  
    // Remover um par chave-valor do mapa
    removerChave(chave) {
      this.map.delete(chave);
    }
  
    // Verificar se uma chave existe no mapa
    verificarChave(chave) {
      return this.map.has(chave);
    }
  
    // Obter o valor associado a uma chave
    obterValor(chave) {
      return this.map.get(chave);
    }
  
    // Retornar o tamanho do mapa
    tamanho() {
      return this.map.size;
    }
  
    // Limpar o mapa
    limpar() {
      this.map.clear();
    }
  }
  
  // Exemplo de uso da classe MeuMap
  const meuMapa = new MeuMap();
  meuMapa.adicionarChaveValor("chave1", "valor1");
  meuMapa.adicionarChaveValor("chave2", "valor2");
  meuMapa.adicionarChaveValor("chave3", "valor3");
  
  console.log(meuMapa.tamanho());   // Saída: 3
  console.log(meuMapa.obterValor("chave2"));   // Saída: valor2
  
  meuMapa.removerChave("chave1");
  
  console.log(meuMapa.verificarChave("chave1"));   // Saída: false
  console.log(meuMapa.tamanho());
  