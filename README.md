### Observação

Este repositório contem o **Projeto Fast Doudle Click** que foi desenvolvido por _[Willian Alves Batista](https://www.linkedin.com/in/willian-alves-batista-60aa6a180/)_.

##



#### Habilidades que foram exigidas:

  - Logica de programação;
  - Clean Code;
  - UX/UI

#### Tecnologias utilizadas:

  - React;
  - uuidv4;
  - axios;
  - swr;
  - chakra-ui;
  - CSS;
  - HTML;
  - eslint;
  - vscode;

---

## Apresentação do Projeto

O objetivo do projeto é permitir que os usuários do sistema possam registar o tempo e depois vizualizar todos os tempos salvos.


## Inciando o projeto

### backend

**Observação:** Para iniciar a API e o banco de dados, é necessário instalar a lib "json-server" globalmente (**npm install -g json-server**) e rodar o comando `json-server --watch backend/db.json --port 3001` na pasta raiz do projeto. 



Na raiz do projeto, para dar start ao **Backend**

    json-server --watch backend/db.json --port 3001
    
--

Para dar start no Frontend, terá que entrar no diretório frontend e depois:

    npm install
   
 
Em seguida:

    npm start
 
--

## A aplicação tem as seguintes funcionalidades:

    - Uma página Registro de tempo.
    - E a listagem dos tempos.


## API REST

**TimeLine**

- id: um identificador unico do datetime;
- datetime: data e tempo registrado;

**Endpoints**

    - GET/timeLine: retorna a lista dos tempos
    - GET/timeLine/:id: retorna os detalhes de um tempo



