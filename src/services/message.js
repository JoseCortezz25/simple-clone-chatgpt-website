import axios from 'axios';
const baseURL = 'http://localhost:3000/api'

export const getMessageByGPT = async (data) => {
  const response = await axios.post(`${baseURL}/prompt`, data);
  return response.data.message;
}