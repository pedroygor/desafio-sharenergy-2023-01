export default async function getRandomDogs(): Promise<string[]> {
  const URL = 'https://random.dog/doggos';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}