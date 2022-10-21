/*
Entity Relationship Diagram:

population_years:      countries:
id               |---- id
population       |     name
year             |     continent      
country_id ------|    
  
*/

--How many entries in the countries table are from Africa? - 56
select count(*)
from countries
where continent = 'Africa';

--What was the total population of the continent of Oceania in 2005? - 32.664170000000006
select sum(p.population)
from population_years p
join countries c on p.country_id = c.id
where c.continent = 'Oceania' and p.year = 2005;

--What is the average population of countries in South America in 2003? - 25.890651428571427
select avg(p.population)
from population_years p
join countries c on p.country_id = c.id
where c.continent = 'South America' and p.year = 2003

--What country had the smallest population in 2007? - Niue
select name
from countries c
where c.id = (select distinct p.country_id from population_years p where p.population = (select min(pp.population) from population_years pp where pp.year = 2007))

--What is the average population of Ukraine during the time period covered by this dataset? - 47.048393636363635
select avg(p.population)
from population_years p 
join countries c on p.country_id = c.id
where c.name = 'Ukraine';

--How many countries have the word “The” in their name? - 2
select count(name)
from countries
where name like '%The%';

--What was the total population of each continent in 2010? - 6468.909719999997
select sum(p.population)
from population_years p
where p.year = 2005;
