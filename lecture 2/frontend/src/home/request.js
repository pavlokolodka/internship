export async function requestHero(name) {
  try {
    const hero = await fetch(`http://localhost:3000/swapi?name=${name}`);

    return hero.json();
  } catch (error) {
    console.log(error)
    throw error;
  }
};
