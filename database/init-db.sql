-- init-db.sql
\c gerenciamento_clientes;

DROP TABLE IF EXISTS clientes;

CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(11) NOT NULL,
    coordenada_x INT NOT NULL,
    coordenada_y INT NOT NULL
);

