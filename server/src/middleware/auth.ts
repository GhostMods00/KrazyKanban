import { Request, Response, NextFunction } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import jwt from 'jsonwebtoken';

// Define user payload interface
interface UserPayload {
  id: string;
  email: string;
  username: string;
  // Add other user properties you need
}

// Extend Request type properly with Express generics
interface AuthRequest extends Request<
  ParamsDictionary,
  any,
  any,
  ParsedQs,
  Record<string, any>
> {
  user?: UserPayload;
}

// Define the middleware function with proper Express types
export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      res.status(401).json({ message: 'Authentication token required' });
      return;
    }

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined in environment variables');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(403).json({ message: 'Invalid or expired token' });
        return;
      }

      // Type assertion for the decoded token
      (req as AuthRequest).user = decoded as UserPayload;
      next();
    });
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(500).json({ message: 'Server error during authentication' });
  }
};

// Export the types
export type { AuthRequest, UserPayload };