import axios from 'axios';

const API_URL: string = 'https://pokeapi.co/api/v2';

export const getById = async (id: number): Promise<object> => {
  const result = await axios.get(`${API_URL}/pokemon/${id}`);
  return result;
};
