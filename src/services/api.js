import axios from 'axios';

export const getPhotoByName = async (name = '', page = 1) => {
  const API_KEY = '36111382-22a83a14602283ad176c86834';
  const {
    data: { hits },
  } = await axios.get(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  );

  return hits;
};
