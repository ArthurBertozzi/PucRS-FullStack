# Algoritmos de Busca em JavaScript

Este diretório contém implementações em JavaScript de diferentes algoritmos de busca. Cada algoritmo é representado por um arquivo separado, permitindo a fácil compreensão e reutilização do código.

## Busca Linear/Sequencial

O algoritmo de busca linear, também conhecido como busca sequencial, percorre cada elemento de uma lista em sequência até encontrar o elemento desejado.

_Arquivo:_ linearSearch.js

Exemplo de uso:
`const array = [5, 3, 8, 2, 1, 4];`
`const target = 8;`
`console.log(linearSearch(array, target));`

## Busca Binária

A busca binária é um algoritmo eficiente para encontrar um elemento em uma lista ordenada. Ele divide repetidamente a lista ao meio e verifica se o elemento desejado está na metade esquerda ou direita.

_Arquivo:_ binarySearch.js

Exemplo de uso:
`const array = [1, 2, 3, 4, 5, 8];`
`const target = 4;`
`console.log(binarySearch(array, target));`
