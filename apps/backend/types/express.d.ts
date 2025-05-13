import { JwtUserPayload } from '@san-juan-store/types';

declare global {
    namespace Express {
        interface Request {
            user?: JwtUserPayload;
        }
    }
}