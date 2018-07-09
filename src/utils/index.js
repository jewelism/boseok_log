import {BASE_URI} from '../constants';

export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export const objToQuerystring = obj => {
  let queryString = '?';
  for (const key in obj) {
    queryString += `${key}=${obj[key]}&`;
  }
  queryString = queryString.substr(0, queryString.length - 1);
  return queryString;
};

export const getImagePath = imageName => {
  return `${BASE_URI}/${imageName}`;
};