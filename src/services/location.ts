import { getRequest } from 'services/request';

const BASE_URL_DATAGOUV = 'https://api-adresse.data.gouv.fr/';
const headers = {
  'Accept': 'application/json'
};

const getGeoapify = (url: string, params: any) => {
  return getRequest(BASE_URL_DATAGOUV + url, params, headers);
};

export const getCoordinatesFromAddress = (address: string): Promise<any> => {
  return getGeoapify('/search', {
    q: address,
    type: 'housenumber',
    autocomplete: 1
  });
};
