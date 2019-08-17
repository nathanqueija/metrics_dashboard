import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:3001/user',
  timeout: 1000
});

export const get = async id => {
  try {
    const user = await service.get(`/${id}`);
    return user.data;
  } catch (e) {
    return e;
  }
};
