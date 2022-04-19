import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

const LoginScreen = () => {

  //? useNavigate nos permite navegar a una ruta especifica, la propiedad replace nos permite eliminar la ruta pasada del historial
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  
  const handleLogin = () => {

    const action = { type: types.login, payload: { name: 'Oscar' } }

    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/';

    navigate(lastPath, {
      replace: true,
    });
  }

  return (
    <div className='container mt-5'>
      <h1>Login Screen</h1>
      <hr />
      <button className='btn btn-primary' onClick={ handleLogin }>
        Login
      </button>
    </div>
  );
}

export default LoginScreen;