type RequestMethod = 'GET' | 'POST';

interface RequestConfig {
  method: RequestMethod,
  headers: any,
  params?: any
  body?: any
}

const fetchRequest = (url: string, options: RequestConfig) => fetch(url, options).then(res => res.json(), err => console.error(err));
const serialize = (params: any) => Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');

export const getRequest = (url: string, params: any, headers: any): Promise<any> => {
  const requestOptions: RequestConfig = {
    method: 'GET',
    headers
  };
  const serializedParams = serialize(params);
  const newUrl = !!serializedParams ? `${ url }?${serializedParams}` : url;

  return fetchRequest(newUrl, requestOptions);
};

export const postRequest = (url: string, body: any = {}, headers: any): Promise<any> => {
  const requestOptions: RequestConfig = {
    method: 'POST',
    headers,
    body
  };
  return fetchRequest(url, requestOptions);
};
