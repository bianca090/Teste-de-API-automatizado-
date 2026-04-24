## 🚀 API Testing Automation - Cypress & Postman

## 📝 Sobre o Projeto
Este projeto consiste na automação de testes de API para a Restful-API-Dev, utilizando o framework Cypress para a escrita de scripts em JavaScript e o Postman para validações manuais e coleções.

O objetivo principal foi exercitar a validação de contratos, status codes e a integridade de dados em endpoints de busca (GET) e cadastro (POST) de dispositivos, garantindo que a comunicação entre o front-end e o back-end ocorra sem falhas.

## 🕹️ Funcionalidades Testadas
Busca de Dispositivos: Validação do retorno de dados específicos (ID e Nome) de um dispositivo existente com status code 200 OK.

Cadastro de Dispositivos: Teste de criação de novos itens enviando payloads complexos (objetos aninhados com preço, ano e especificações técnicas).

Validação de Resposta: Verificação automatizada para garantir que o corpo da resposta não esteja vazio e contenha os atributos esperados.

Garantia de Contrato: Certificação de que os tipos de dados retornados pela API seguem o padrão definido na documentação.

## 🛠️ Tecnologias Utilizadas
Cypress: Framework principal para automação de testes E2E e de API.

JavaScript: Linguagem base para a construção da lógica de testes.

Postman: Ferramenta para exploração inicial da API e documentação de coleções.

Chai / Mocha: Bibliotecas integradas ao Cypress para asserções (expect, to.equal).

## 📁 Estrutura do Teste
O script foi estruturado seguindo as melhores práticas de escrita, utilizando blocos describe e it para manter a clareza e organização dos casos de teste:
