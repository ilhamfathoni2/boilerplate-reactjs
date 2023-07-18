import axios, { AxiosError, AxiosResponse } from "axios";

const {REACT_APP_API_ECOMMERCE} = process.env;

const client = axios.create({
  baseURL: REACT_APP_API_ECOMMERCE,
});

client.interceptors.request.use(
  function (config) {
    config.baseURL = REACT_APP_API_ECOMMERCE;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
}

client.interceptors.response.use(onResponse, onResponseError);

export default client;

