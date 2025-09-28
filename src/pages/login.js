import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from 'services/AuthService';

const authService = new AuthService();
function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const navigate = useNavigate();
  const validateForm = () => {
    if (!username || !password) {
      return 'Username and password are required';
    }

    if (username.length < 3) {
      return 'Username must be at least 3 characters long';
    }

    if (password.length < 3) {
      return 'Password must be at least 3 characters long';
    }

    return null;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorMessage = validateForm();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    const credentials = { username: username, password: password };
    authService.login(credentials)
      .then((responseData) => {
        console.log('Login successful:', responseData);
        navigate('/', { replace: true });
      })
      .catch((error) => {
        setError(error.response.data.message);
      });

  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="#"><b style={{ fontSize: '0.8rem' }}>POS v3.2.0</b><br /><p >Warung Madura</p></a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form >
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} />
                    <label htmlFor="remember">&nbsp;Remember Me</label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>
                    Sign In
                  </button>

                </div>
              </div>
              {error && <div style={{ color: 'red' }}>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;