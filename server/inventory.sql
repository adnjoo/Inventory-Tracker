-- DB Schema
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(6, 2) NOT NULL,
  inventory INTEGER NOT NULL
);

-- Data Insertion
INSERT INTO
  products (name, price, inventory)
VALUES
  ('Mountain Bike', 199.99, 25),
  ('Surfboard', 299.99, 30),
  ('50L Backpack', 59.99, 20),
  ('Yeti Tumbler', 29.99, 100),
  ('Yeti Cooler', 249.99, 30);