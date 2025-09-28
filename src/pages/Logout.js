import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from 'services/AuthService';

const authService = new AuthService();
const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        authService.logout();
        console.log('Logout successful:');
        navigate('/login', { replace: true });
    };

    useEffect(() => {
        handleLogout();
    }, []);

    return null;
};

export default Logout;