import { codes } from '../utils/mapHttpStatusCode';

export interface UserServiceResponse {
  status: keyof typeof codes;
  data: Record<string, any>;
}
