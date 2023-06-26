# Árvores em JavaScript

Este diretório contém implementações em JavaScript de duas estruturas de árvores: árvore genérica e árvore binária. Cada estrutura é representada por um arquivo separado, permitindo a fácil compreensão e reutilização do código.

## Árvore Genérica

Uma árvore genérica é uma estrutura de dados em que cada nó pode ter um número arbitrário de filhos.

Arquivo: genericTree.js

Exemplo de uso:
`const tree = new GenericTree();`
`tree.addNode('A', null);`
`tree.addNode('B', 'A');`
`tree.addNode('C', 'A');`
`tree.addNode('D', 'B');`
`tree.addNode('E', 'B');`

## Árvore Binária

Uma árvore binária é uma estrutura de dados em que cada nó pode ter no máximo dois filhos: um à esquerda e outro à direita.

Arquivo: binaryTree.js

Exemplo de uso:
`const tree = new BinaryTree();`
`tree.insert(8);`
`tree.insert(3);`
`tree.insert(10);`
`tree.insert(1);`
`tree.insert(6);`
