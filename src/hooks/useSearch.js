import axios from 'axios';

const useSearch = () => {
  return async (params) => {
    try {
      const response = await axios.post(`http://localhost:5000/sake/search`, params);
      return response.data;
    } catch (err) {
      throw err;
    }
  };
};

export default useSearch;
