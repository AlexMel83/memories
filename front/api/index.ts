import type { AxiosInstance } from 'axios';
import coworkingsModule from './coworkings';
import memoriesModule from './memories';
import authModule from './auth';

export default function (instance: AxiosInstance) {
  return {
    coworkings: coworkingsModule(instance),
    memories: memoriesModule(instance),
    auth: authModule(instance),
  };
}
