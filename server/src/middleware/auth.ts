import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // Get the token from the Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN format

  // If no token is provided, return 401 Unauthorized
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token using the JWT_SECRET
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    
    // Add the user data to the request object
    (req as any).user = decoded;
    
    // Continue to the next middleware/route handler
    next();
  } catch (error) {
    // If token is invalid or expired, return 403 Forbidden
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
};