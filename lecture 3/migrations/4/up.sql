-- 4. Change in user table "role" field where values = customer
--
-- Test data:
-- insert into "user" (email, name, profile_id) values ('email', 'Bob', 1);
-- insert into "user" (email, name, profile_id) values ('email1', 'Oleg', 2);
-- insert into "user" (email, name, profile_id, "role") values ('email2', 'Pavlo', 3, 'admin');

-- insert into profile (info) values ('profile info');
-- insert into profile (info) values ('some info');
-- insert into profile (info) values ('some info');
--

-- up 
begin;
SELECT id INTO ids FROM "user" WHERE role = 'customer';

UPDATE "user" 
SET "role"  = 'admin' 
WHERE "role" = 'customer'; 
commit;
