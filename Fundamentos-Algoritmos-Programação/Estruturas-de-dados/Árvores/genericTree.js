class Node {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }
  
  class GenericTree {
    constructor() {
      this.root = null;
    }
  
    addNode(value, parentValue) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      this.traverseAndAdd(this.root, parentValue, newNode);
    }
  
    traverseAndAdd(node, parentValue, newNode) {
      if (node.value === parentValue) {
        node.children.push(newNode);
        return;
      }
  
      for (const child of node.children) {
        this.traverseAndAdd(child, parentValue, newNode);
      }
    }
  }
  
  // Exemplo de uso
  const tree = new GenericTree();
  tree.addNode('A', null);
  tree.addNode('B', 'A');
  tree.addNode('C', 'A');
  tree.addNode('D', 'B');
  tree.addNode('E', 'B');
  