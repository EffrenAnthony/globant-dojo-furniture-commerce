import axios from 'axios';
import {BACKEND_URL} from '../util/constants';

export async function getAllCollections() {
  try {
    const url = `${BACKEND_URL}/api/furniture-collections?sort=[collectionName]`;
    const {data} = await axios.get(url);
    return data;
  } catch (error) {
    throw error;
  }
}
