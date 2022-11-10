import {create} from 'apisauce';

const BASE_URL = 'https://apnahero.pk';

const apiClient = create({
  baseURL: BASE_URL,
});

const displayImages = endPoint => {
  return `${BASE_URL}/${endPoint}`;
};

const getAllCities = page => {
  return apiClient.get(`/api/cities?page=${page}`, null);
};

const getAllCategories = () => {
  return apiClient.get('/api/categories', null);
};

const getAllCompanies = () => {
  return apiClient.get('/api/companies', null);
};

const getFlyersAndCompanies = () => {
  return apiClient.get('/api/flyers', null);
};

const pagination = URL => {
  return apiClient.get(`${URL}`, null);
};

export default {
  displayImages,
  getAllCities,
  getAllCategories,
  getAllCompanies,
  getFlyersAndCompanies,
  pagination,
};
