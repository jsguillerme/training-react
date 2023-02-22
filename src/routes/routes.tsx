import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home/home';
import Login from '../pages/login/login';


export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Navigate to={'/login'} />}
        />
        <Route
          path='/login'
          element={ <Login />}
        />
        <Route
          path='/home'
          element={ <Home />}
        />
      </Routes>
    </Router>
  );
}