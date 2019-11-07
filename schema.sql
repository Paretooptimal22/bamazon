DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  department_name VARCHAR(255) NOT NULL,
  price DOUBLE(10, 2) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL
);