import axios from 'axios';

const fetchFromCMS = async (path) => {
  const url = `http://localhost:1337/api/${path}?populate=*`;
  const res = await axios.get(url);
  console.log('RESPONSE:', res.data.data);
  return res.data.data;
};

export default fetchFromCMS;
