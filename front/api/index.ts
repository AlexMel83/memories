import type { AxiosInstance } from 'axios';
import memoriesModule from './memories';
import authModule from './auth';

export default function (instance: AxiosInstance) {
  return {
    memories: memoriesModule(instance),
    auth: authModule(instance),
  };
}
