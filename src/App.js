import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import EditProfile from './pages/EditProfile';
import MyJobs from './pages/MyJobs';
import JobApply from './pages/JobApply';
import JobApplyPage1 from './components/JobApplyPage1';
import JobApplyPage2 from './components/JobApplyPage2';
import JobApplyPage3 from './components/JobApplyPage3';
import JobApplyPage4 from './components/JobApplyPage4';
import JobApplyPage5 from './components/JobApplyPage5';

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
        <Route
          path='/edit-profile'
          element={<EditProfile />}
        />

        <Route
          path='/my-jobs'
          element={<MyJobs />}
        />


      </Routes>
      <Routes>
        <Route path='/job-apply/*' element={<JobApply />}>

          <Route index element={<JobApplyPage1 />} />
          <Route path="page-2" element={<JobApplyPage2 />} />
          <Route path="page-3" element={<JobApplyPage3 />} />
          <Route path="page-4" element={<JobApplyPage4 />} />
          <Route path="page-5" element={<JobApplyPage5 />} />

        </Route>

      </Routes>



    </>
  );
}

export default App;
