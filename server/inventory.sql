-- DB Schema
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(6, 2) NOT NULL,
  quantity INTEGER NOT NULL
);

-- Data Insertion
INSERT INTO
  products (name, price, quantity)
VALUES
  ('Mountain Bike', 199.99, 25),
  ('Surfboard', 299.99, 30),
  ('50L Backpack', 59.99, 20),
  ('Yeti Tumbler', 29.99, 100),
  ('Yeti Cooler', 249.99, 30),
  ('Popsicle', 1.99, 100),
  ('Granola Bar', 2.99, 200),
  ('Chocolate Bar', 3.29, 300),
  ('Fruit Cake', 9.99, 20);

-- Reset id column
ALTER TABLE products
  DROP id;

ALTER TABLE products
  ADD id SERIAL PRIMARY KEY; 