import { JwtPayload, jwtDecode } from 'jwt-decode';

interface CustomJwtPayload extends JwtPayload {
  username: string;
}

class AuthService {
  getProfile() {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode<CustomJwtPayload>(token);
      } catch (error) {
        return null;
      }
    }
    return null;
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (decoded.exp) {
        return decoded.exp < Date.now() / 1000;
      }
      return false;
    } catch (err) {
      return true;
    }
  }

  getToken(): string {
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string) {
    // Save token to localStorage
    localStorage.setItem('id_token', idToken);
    // Redirect to home page
    window.location.assign('/');
  }

  logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    // Redirect to login page
    window.location.assign('/login');
  }
}

export default new AuthService();