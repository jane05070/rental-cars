import axios from 'axios';

axios.defaults.baseURL = "https://65033317a0f2c1f3faeba03a.mockapi.io";


export const getCatalog = async page => {
  try {
    const response = await axios.get('/cars', {
      params: {
        page: page,
        limit: 8,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};



