import { client, checkError } from './client';

export async function getImages(from = 0, to = 40) {
  const response = await client.from('random_images').select('*').range(from, to);
  return checkError(response);
}