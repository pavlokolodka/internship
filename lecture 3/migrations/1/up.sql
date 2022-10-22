-- 1. Create user table (id, email, name)

-- up
begin;
create table "user"(
id serial primary key, 
email char(255) unique,
name varchar
);
commit;