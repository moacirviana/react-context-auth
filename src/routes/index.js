import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/Layout';
import { FrmLogin } from '../components/Login';
import { ProtectedLayout } from '../components/ProtectedLayout';
import { AuthProvider } from '../context/AuthProvider';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';


export default function AppRouter() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={ <MainLayout />}>

            <Route index element={<FrmLogin />} />

            <Route path='profile' element={<ProtectedLayout><Profile /></ProtectedLayout>} />

            <Route path='home' element={<Home />} />
            
            <Route path='login' element={<FrmLogin />} />
            
          </Route>

          <Route path='*' element={<NotFound />} />

        </Routes>
      </Router>
      </AuthProvider>
  );
}
/*
<Route path='/profile' element={<ProtectedLayout><Profile /></ProtectedLayout>}  />
          
<Route path='/' element={<Home />} />

<Route path='/login' element={<Login />}> */