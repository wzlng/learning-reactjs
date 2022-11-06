/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { EnhancedStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

let store: EnhancedStore;

export const injectStore = (_store: EnhancedStore) => {
  store = _store;
};

function getUrl(config: any) {
  if (!config) return undefined;

  if (config.baseURL) {
    return config.url.replace(config.baseURL, '');
  }
  return config.url;
}

const onFulfilledRequest = (config: any) => {
  // const accessToken = store?.getState()?.auth?.user?.accessToken;
  // if (accessToken) {
  //   config.headers.Authorization = `Bearer ${accessToken}`;
  // }
  console.log(
    `%c ${config.method.toUpperCase()} - ${getUrl(config)}:`,
    'color: #0086b3; font-weight: bold',
    config
  );
  return config;
};

const onRejectedRequest = (error: any) => {
  Promise.reject(error);
};

const onFulfilledResponse = (response: any) => {
  console.log(
    `%c ${response?.status} - ${getUrl(response?.config)}:`,
    'color: #008000; font-weight: bold',
    response
  );
  return response;
};

const onRejectedResponse = (error: any) => {
  console.log(
    `%c ${error?.response?.status} - ${getUrl(error?.response?.config)}:`,
    'color: #a71d5d; font-weight: bold',
    error.response
  );
  if (error?.response?.status === 401) {
    // Unauthorized
  }
  return Promise.reject(error);
};

const setupInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => onFulfilledRequest(config),
    (error) => onRejectedRequest(error)
  );

  instance.interceptors.response.use(
    (response) => onFulfilledResponse(response),
    (error) => onRejectedResponse(error)
  );
};

export default setupInterceptors;
