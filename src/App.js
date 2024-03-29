import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/signup'
          element={<SignUp />}
        />
        <Route
          path='/job'
          element={<Jobs />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />

        <Route
          path='/notification'
          element={<Notifications />}
        />
      </Routes>



    </>
  );
}

export default App;
