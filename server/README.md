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

3. Log back in and create the main table using instructions found in [inventory.sql](https://github.com/adnjoo/inventory-tracker/blob/main/server/inventory.sql), and insert dummy data.

```
psql --d inventory
```

4. Run Server

```
npm install
node start
```
