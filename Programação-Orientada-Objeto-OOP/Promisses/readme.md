# Exemplo de uso de Promises em JavaScript

Este repositório contém um exemplo de aplicação do conceito de Promises em JavaScript. A Promises é uma funcionalidade do JavaScript que lida com operações assíncronas e facilita o tratamento de resultados bem-sucedidos e erros.

## Uso de Promises com then (onReject e onFulfilled)

No arquivo JavaScript fornecido, há uma função assíncrona chamada fetchData que retorna uma Promise. Essa Promise é resolvida após um intervalo de tempo simulando a obtenção de dados de uma API.

Em seguida, é demonstrado o uso do método then para tratar o caso em que a Promise é resolvida (onFulfilled) e o método catch para tratar o caso em que a Promise é rejeitada (onReject). Isso permite executar diferentes ações com base no resultado da Promise.

## Uso de async/await

O arquivo JavaScript também apresenta o exemplo de uso do async/await. Uma função chamada fetchAsyncData é declarada como assíncrona, permitindo a utilização da palavra-chave await para aguardar a resolução da Promise retornada pela função fetchData.

Dentro do bloco try dessa função assíncrona, o código é executado quando a Promise é resolvida. Já o bloco catch é executado quando a Promise é rejeitada, permitindo tratar possíveis erros de forma apropriada.
