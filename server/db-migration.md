## Dependencies

1. Install PostgreSQL

```
brew install postgresql
```

2. Login to Postgres and create a database


```
psql -d postgres
create database inventory;
\q
```

3. Log back in and create tables using db-schema, insert data