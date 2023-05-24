import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImagesWithQuery = async (searchQuery, page) => {
  const response = await axios.get(
    `?q=${searchQuery}&page=${page}&key=34782290-a845b93786f68f0a868a68df0&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

export default fetchImagesWithQuery;
