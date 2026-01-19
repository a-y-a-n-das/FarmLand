// Augment Express Request type
declare namespace Express {
  export interface Request {
    userId?: number;
  }
}
