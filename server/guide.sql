-- Create postgres superuser

CREATE USER postgres superuser; 

-- Create database

CREATE DATABASE inventory;

-- Login to postgres db

psql -d inventory

-- Display tables

\dt

-- Display users

\du