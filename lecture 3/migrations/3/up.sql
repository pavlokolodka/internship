-- 3. Create profile table (id, info) and link to user table 

-- up 
begin;
create table "profile"(
id serial primary key, 
info varchar
);

alter table "user" 
add profile_id int; 

alter table "user" 
add constraint fk_profile_id foreign key (profile_id) references profile(id);
commit;
