type APIUserGenerator = {
  results: []
}

export default async function getUserGenerator (): Promise<[]> {
  const URL = 'https://randomuser.me/api/?results=20&nat=br';
  const resolve = await fetch(URL);
  const data: APIUserGenerator = await resolve.json();

  return data.results;
}