## Instructions:

1. Install PostgreSQL

```
brew install libpq
```

2. Login to Postgres, create 'inventory' database, create postgres user and grant privileges.

```
psql --d postgres
CREATE DATABASE inventory;
CREATE USER postgres;
ALTER USER postgres WITH superuser;
\q
```

3. Log back in and create the main tables using instructions (inventory.sql), and insert data.

-- DB Schema
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(6, 2) NOT NULL,
  quantity INTEGER NOT NULL,
  tags VARCHAR(100) NOT NULL
);

-- Data Insertion
INSERT INTO
  products (name, price, quantity, tags)
VALUES
  ('Mountain Bike', 199.99, 25, 'sports-equipment'),
  ('Surfboard', 299.99, 30, 'sports-equipment'),
  ('50L Backpack', 59.99, 20, 'sports-equipment'),
  ('Yeti Tumbler', 29.99, 100, 'sports-accessories'),
  ('Yeti Cooler', 249.99, 30, 'sports-accessories'),
  ('Airpods', 179.00, 100, 'consumer-electronics'),
  (
    'Macbook Pro',
    1299.00,
    50,
    'consumer-electronics'
  ),
  ('iPhone SE', 399.00, 300, 'consumer-electronics'),
  (
    'iPhone 13 Pro',
    999.00,
    20,
    'consumer-electronics'
  );

4. Run Server

```
npm install
nodemon start
```


* Extra SQL instructions


-- Reset id column
ALTER TABLE
  products DROP id;

ALTER TABLE
  products
ADD
  id SERIAL PRIMARY KEY;
