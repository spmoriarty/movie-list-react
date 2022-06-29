import { client } from './client';

export default async function movieList() {
  
  const response = await client.from('movies').select('*');
  
  return response.data;
  
}

