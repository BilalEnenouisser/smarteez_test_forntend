import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page = 1, filters = {}) => {
  const params = { page, ...filters };
  const response = await axios.get(`${API_URL}/character`, { params });
  return response.data;
};

export const getCharacterById = async (id) => {
  const response = await axios.get(`${API_URL}/character/${id}`);
  return response.data;
};