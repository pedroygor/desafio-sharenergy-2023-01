import { IUserAPI } from './../interface/IUserAPI';
interface  APIUserGenerator {
  results: IUserAPI[]
}

export default async function getUserGenerator (): Promise<IUserAPI[]> {
  const URL = 'https://randomuser.me/api/?results=20&nat=br';
  const resolve = await fetch(URL);
  const data: APIUserGenerator = await resolve.json();

  return data.results;
}