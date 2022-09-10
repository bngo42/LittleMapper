import {getRequest} from "./request";
import {CM_DirectionApiResponse} from "models/citymapper.model";

const BASE_URL_CITYMAPPER = 'https://citymapper-proxy.herokuapp.com';
const headers = {
  'Citymapper-Partner-Key': process.env.REACT_APP_CITYMAPPER_KEY,
};

const getCitymapper = (url: string, params: any) => {
  return getRequest(BASE_URL_CITYMAPPER + url, params, headers);
};

export const getTransitionDirection = (start: string | null, end: string | null): Promise<CM_DirectionApiResponse> => {
  if (!start || !end) {
    return Promise.reject('Wrong parameters');
  }
  const params = {
    start,
    end,
    language: 'fr-FR'
  };

  return getCitymapper('/directions/transit', params);
}
