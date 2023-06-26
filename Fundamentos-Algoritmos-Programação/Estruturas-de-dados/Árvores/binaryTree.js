class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      this.traverseAndInsert(this.root, newNode);
    }
  
    traverseAndInsert(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this.traverseAndInsert(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this.traverseAndInsert(node.right, newNode);
        }
      }
    }
  }
  
  // Exemplo de uso
  const tree = new BinaryTree();
  tree.insert(8);
  tree.insert(3);
  tree.insert(10);
  tree.insert(1);
  tree.insert(6);
  