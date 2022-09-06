import {getRequest} from "./request";
import {CM_DirectionApiResponse} from "models/citymapper.model";

const BASE_URL_CITYMAPPER = 'https://api.external.citymapper.com/api/1';
const headers = {
  'Citymapper-Partner-Key': process.env.REACT_APP_CITYMAPPER_KEY,
};

const getCitymapper = (url: string, params: any) => {
  return getRequest(BASE_URL_CITYMAPPER + url, params, headers);
};

export const getTransitionDirection = (start: string, end: string): Promise<CM_DirectionApiResponse> => {
   const params = {
    start,
    end,
    language: 'fr-FR'
   };
   return getCitymapper('/directions/transit', params);
}
