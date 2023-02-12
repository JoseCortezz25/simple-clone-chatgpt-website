import axios from 'axios';
const baseURL = 'simple-clone-chatgpt-backend-production.up.railway.app/api'

export const getMessageByGPT = async (data) => {
  const response = await axios.post(`${baseURL}/prompt`, data);
  return response.data.message;
}