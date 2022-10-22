-- 2. Add to user table field "role" that have 2 values - admin and customer

-- down
begin;
alter table "user" 
drop column role;

drop type if exists roles;
commit;