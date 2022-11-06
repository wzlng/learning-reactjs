/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import setupInterceptors from './setupInterceptors';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 30000
});

setupInterceptors(axiosClient);

export default axiosClient;

export function getRequest(URL: string) {
  return axiosClient.get(`/${URL}`).then((response) => response);
}

export function postRequest(URL: string, payload: any, config: any = null) {
  return axiosClient.post(`/${URL}`, payload, config).then((response) => response);
}

export function patchRequest(URL: string, payload: any) {
  return axiosClient.patch(`/${URL}`, payload).then((response) => response);
}

export function deleteRequest(URL: string) {
  return axiosClient.delete(`/${URL}`).then((response) => response);
}
