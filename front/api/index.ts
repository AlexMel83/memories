import type { AxiosInstance } from 'axios';
import authModule from './auth';
import coworkingsModule from './coworkings';

export default function (instance: AxiosInstance) {
  return {
    auth: authModule(instance),
    coworkings: coworkingsModule(instance),
  };
}
