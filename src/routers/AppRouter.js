import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';
import LoginScreen from '../components/login/LoginScreen';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        }/>

        <Route path='/*' element={ 
          <PrivateRoute>
            <DashboardRoutes />
          </PrivateRoute>
        }/>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;