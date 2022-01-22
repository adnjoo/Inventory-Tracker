## Dependencies

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
