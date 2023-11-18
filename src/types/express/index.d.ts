import { PayloadUser } from '../payloadUser';

declare global {
  namespace Express {
    interface Request {
      user?: PayloadUser;
      token?: string;
    }
  }
}
