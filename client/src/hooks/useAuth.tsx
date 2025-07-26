import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    window.location.href = 'http://localhost:5000/api/auth/google';
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const saveToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  return { loginWithGoogle, logout, saveToken };
};
