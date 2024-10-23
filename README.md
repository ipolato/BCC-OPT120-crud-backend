# Repositório didático para ensino de tecnologias JS

O servidor neste repositório usa as tecnologias:
* PostgreSQL
* Node.js
* Express

Considero que você já tenha instalado em sua máquina:
* [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [Node](https://nodejs.org/en/download/package-manager)
* [Docker](https://www.docker.com/products/docker-desktop/)

Para começar, instale o servidor de banco de dados PostgreSQL.
Neste projeto disponibilizamos um container docker para facilitar a instalação do PostgreSQL. 

A instalação pode ser feita através do comando:

```bash
docker run -d --name sistema -p 5433:5432 -e POSTGRES_PASSWORD=123456 postgres:13.5
```

Após a instalação do container acesse o terminal para criar o banco de dados e a tabela.

Acesse o terminal de comandos do container. Abra um terminal de comandos e execute:
```bash
docker exec -it sistema sh
```

Acesse o terminal de comandos do PostgreSQL:
```bash
psql -U postgres
```

Crie a base de dados para o sistema:
```bash
CREATE DATABASE sistema;
```

Acesse a base de dados criada:
```bash
\c sistema;
```

Crie a tabela produtos dentro da base de dados sistema:
```bash
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    estoque INTEGER NOT NULL DEFAULT 0,
    preco NUMERIC(5,2) NOT NULL DEFAULT 0.00,
    pData DATE NOT NULL
);
```

Se desejar povoar o banco com alguns dados sintéticos, você pode encontrar alguns no arquivo `sql/colonize.db.sql`

Pronto! Você pode sair do terminal, fechando suas conexões com o commando `exit` duas vezes: a primeira sairá do psql; a segunda do terminal de comandos do container.

Em seguida clone o repositório de código:
```bash
git clone https://github.com/ipolato/BCC-OPT120-crud-backend.git
```

Acesse o diretório criado (BCC-OPT120-crud-backend). Instale as dependências do projeto com o comando:
```bash
npm install
```

Em seguida rode o comando para iniciar o servidor:
```bash
node server.js
```

Seu servidor estará rodando na porta 5000! Para acessar, basta abrir um navegador e digitar a URL:
```bash
http://localhost:5000/api/
```
