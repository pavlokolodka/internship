-- 2. Add to user table field "role" that has 2 values - admin and customer

-- up
begin;
create type roles as enum ('admin', 'customer');

alter table "user" 
add role roles default 'customer';
commit;