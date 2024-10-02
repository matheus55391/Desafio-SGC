# Teste de Programação Desenvolvedor

Este é um projeto full stack desenvolvido para facilitar o gerenciamento de clientes de uma empresa que realiza limpeza em residências. O sistema é composto por um backend em Node.js utilizando o framework NestJS, PostgreSQL como banco de dados, e um frontend em React com Next.js e NextUI.

## Rodando o projeto 

Para iniciar o projet basta rodar o seguinte comando:.

```bash
  docker-compose up --build
```

## Estrutura do Projeto

### Backend (NestJS)
O backend utiliza o framework NestJS e está localizado na pasta ./backend.

Swagger do backend http://localhost:5000/api

### Frontend (React com Next.js e NextUI)
O frontend está na pasta ./frontend e utiliza React com Next.js e a biblioteca NextUI para a interface.

O front end vai esta hospedado na porta 3000
http://localhost:3000/

## Sistema de Gerenciamento de Clientes (SGC)

O SGC é um Sistema de Gerenciamento de Clientes para uma empresa de limpeza em residências. Consiste em duas partes:

### Parte 1
O sistema permite o gerenciamento de clientes, incluindo a listagem e filtragem com base nas informações cadastradas, bem como o cadastro de novos clientes. As informações gerenciadas são nome, email e telefone.

### Parte 2

Adicionalmente, o sistema otimiza as rotas de atendimento para maximizar a eficiência na visitação dos clientes. Cada cliente possui coordenadas X e Y em um mapa bidimensional. O algoritmo de rota, disponibilizado via API, calcula a ordem de visitação dos clientes para percorrer a menor distância possível.

# Conclusão
O código-fonte e o vídeo de explicação estão disponíveis em um repositório público no GitHub: link do repositório.




## Observações Extras:

- O arquivo com os script do banco esta na pasta database na raiz do projeto.

