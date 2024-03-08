CREATE DATABASE gerenciamento_clientes;

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

INSERT INTO clientes(nome, email, telefone, coordenada_x, coordenada_y) VALUES
    ('Mickey Mouse', 'mickey.mouse@email.com', '79990001111', 10, 15),
    ('SpongeBob SquarePants', 'spongebob@email.com', '79992222333', 20, 25),
    ('Bugs Bunny', 'bugs.bunny@email.com', '79994444555', 30, 35),
    ('Homer Simpson', 'homer.simpson@email.com', '79996666777', 40, 45),
    ('Scooby-Doo', 'scooby.doo@email.com', '79998888999', 50, 55),
    ('Tom Cat', 'tom.cat@email.com', '79990000111', 60, 65),
    ('Bart Simpson', 'bart.simpson@email.com', '79992222333', 70, 75),
    ('Pikachu', 'pikachu@email.com', '79994444555', 80, 85),
    ('Daffy Duck', 'daffy.duck@email.com', '79996666777', 90, 95),
    ('Fred Flintstone', 'fred.flintstone@email.com', '79998888999', 100, 105),
    ('Wonder Woman', 'wonder.woman@email.com', '79990000111', 110, 115),
    ('Sailor Moon', 'sailor.moon@email.com', '79992222333', 120, 125),
    ('Belle', 'belle@email.com', '79994444555', 130, 135),
    ('Shaggy Rogers', 'shaggy.rogers@email.com', '79996666777', 140, 145),
    ('Ariel', 'ariel@email.com', '79998888999', 150, 155);

