# Teste de Programação Desenvolvedor - Facilita Jurídico

Este é um projeto full stack desenvolvido para facilitar o gerenciamento de clientes de uma empresa que realiza limpeza em residências. O sistema é composto por um backend em Node.js utilizando o framework NestJS, PostgreSQL como banco de dados, e um frontend em React com Next.js e NextUI.

## Como Rodar o Projeto Localmente

Para rodar o projeto localmente em produção, basta subir os containers utilizando o Docker Compose. Certifique-se de ter o Docker instalado em sua máquina.

```bash
  docker-compose up -build
```

## Estrutura do Projeto

### Backend (NestJS)
O backend utiliza o framework NestJS e está localizado na pasta ./backend. O Dockerfile presente nessa pasta define a imagem e dependências necessárias. O arquivo docker-compose.yml faz referência a esse Dockerfile.

### Frontend (React com Next.js e NextUI)
O frontend está na pasta ./frontend e utiliza React com Next.js e a biblioteca NextUI para a interface. O Dockerfile na pasta define a imagem e as dependências necessárias.

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

### Ambiente de DEV sem docker

Para rodar em Ambiente de DEV sem o docker seria preciso subir algum banco local PgSql e rodar os arquivos do banco, depois configurar a .env da pasta backend.

Com tudo configurado é so rodar o backend com 
``` 
 npm run start:dev
```
Com o backend online já pode rodar o frontend
``` 
 npm run start:dev
```