create database productdb

create table productos (
 id SERIAL PRIMARY KEY,
 nombre VARCHAR(255) not null,
 descripcion VARCHAR(255) not null,
 precio decimal(8,2),
 esfavorito boolean
);