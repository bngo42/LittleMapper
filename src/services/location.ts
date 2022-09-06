import {getRequest} from 'services/request';
import {LocationApiResponse} from "components/pages/AdressForm/address-form.model";

const BASE_URL_DATAGOUV = 'https://api-adresse.data.gouv.fr';
const headers = {
  'Accept': 'application/json'
};

const getGeoapify = (url: string, params: any) => {
  return getRequest(BASE_URL_DATAGOUV + url, params, headers);
};

export const getCoordinatesFromAddress = (address: string): Promise<LocationApiResponse> => {
  return getGeoapify('/search', {
    q: address,
    type: 'housenumber',
    autocomplete: 1
  });
};
