# Estruturas de Dados em JavaScript

Este diretório contém implementações em JavaScript de quatro estruturas de dados comuns: Pilha, Fila, Map e Set. Cada estrutura está representada em um arquivo separado, permitindo a fácil compreensão e reutilização do código.

## Pilha (Stack)

A pilha é uma estrutura de dados do tipo LIFO (Last In, First Out), onde o último elemento inserido é o primeiro a ser removido.

Arquivo: `pilha.js`

A classe `Pilha` oferece os seguintes métodos:

- `push(element)`: Adiciona um elemento ao topo da pilha.
- `pop()`: Remove e retorna o elemento do topo da pilha.
- `peek()`: Retorna o elemento do topo da pilha sem removê-lo.
- `isEmpty()`: Verifica se a pilha está vazia.
- `size()`: Retorna o tamanho da pilha.
- `clear()`: Limpa a pilha.

## Fila (Queue)

A fila é uma estrutura de dados do tipo FIFO (First In, First Out), onde o primeiro elemento inserido é o primeiro a ser removido.

Arquivo: `fila.js`

A classe `Fila` oferece os seguintes métodos:

- `enqueue(element)`: Adiciona um elemento ao final da fila.
- `dequeue()`: Remove e retorna o elemento do início da fila.
- `front()`: Retorna o elemento do início da fila sem removê-lo.
- `isEmpty()`: Verifica se a fila está vazia.
- `size()`: Retorna o tamanho da fila.
- `clear()`: Limpa a fila.

## Mapa (Map)

O mapa é uma estrutura de dados que armazena pares chave-valor, permitindo a associação de valores a chaves únicas.

Arquivo: `EstruturaMap.js`

A classe `MeuMap` oferece os seguintes métodos:

- `adicionarChaveValor(chave, valor)`: Adiciona um par chave-valor ao mapa.
- `removerChave(chave)`: Remove um par chave-valor do mapa.
- `verificarChave(chave)`: Verifica se uma chave existe no mapa.
- `obterValor(chave)`: Retorna o valor associado a uma chave.
- `tamanho()`: Retorna o tamanho do mapa.
- `limpar()`: Limpa o mapa.

## Conjunto (Set)

O conjunto é uma estrutura de dados que armazena elementos únicos, sem repetição.

Arquivo: `EstruturaSet.js`

A classe `MeuSet` oferece os seguintes métodos:

- `adicionar(elemento)`: Adiciona um elemento ao conjunto.
- `remover(elemento)`: Remove um elemento do conjunto.
- `verificar(elemento)`: Verifica se um elemento existe no conjunto.
- `tamanho()`: Retorna o tamanho do conjunto.
- `limpar()`: Limpa o conjunto.

## Como utilizar

Cada estrutura de dados possui seu arquivo correspondente com a implementação da classe. Basta importar o arquivo desejado em seu projeto e utilizar os métodos disponíveis para interagir com a estrutura.
