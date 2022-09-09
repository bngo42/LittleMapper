import axios from "axios";


const serialize = (params: any) => Object.keys(params)
                                    .map(key => `${key}=${encodeURIComponent(params[key])}`)
                                    .join('&');

export const getRequest = (url: string, params: any, headers: any): Promise<any> => {
  const serializedParams = serialize(params);
  const newUrl = !!serializedParams ? `${ url }?${serializedParams}` : url;

  return axios.get(newUrl, { headers }).then(res => res.data);
};
