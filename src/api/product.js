import axios from 'axios';
import {UNSPLASH_ACCESS_KEY, UNSPLASH_BASE_URL} from '../util/constants';

export async function getRandomProductsByQuery(query) {
  try {
    const url = `${UNSPLASH_BASE_URL}/?query=${query}&count=10&client_id=${UNSPLASH_ACCESS_KEY}`;
    const {data} = await axios.get(url);
    return data;
  } catch (error) {
    throw error;
  }
}
