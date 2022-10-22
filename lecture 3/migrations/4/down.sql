-- 4. Change in user table "role" field where values = customer

-- down
begin;
UPDATE "user" 
SET "role"  = 'customer' 
from ids
WHERE "user".id = ids.id;

drop table ids;
commit;