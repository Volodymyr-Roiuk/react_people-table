export const getPeople = async () => {
  const people = await fetch('https://mate-academy.github.io/react_people-table/api/people.json');

  return people.json();
}