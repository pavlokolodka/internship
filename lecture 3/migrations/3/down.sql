-- 3. Create profile table (id, info) and link with user table as foreign key

-- down
begin;
alter table "user" 
drop column profile_id;

drop table profile cascade;
commit;