import { client } from './client';

export default async function movieList() {
  
  const response = await client.from('movies').select('*');
  
  return response.data;
  
}

export async function getSingleMovie(id) {
  const response = await client.from('movies').select().match({ id }).single();
  
  return response.data;
  
}

