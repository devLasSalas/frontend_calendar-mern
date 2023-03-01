import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';
import { useAuthStore } from '../hooks';

import { Loader } from '../ui/Loader';

export const AppRouter = () => {
  // const authState = 'not-authenticated';
  const { checkAuthToken, status } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])
  

  if( status === 'checking' ) {
    return ( 
      <Loader/>
    )
  }

  return (
    <>
      <Routes>
        {
        status === 'not-authenticated' 
        ? ( 
          <>
            <Route path='/auth/*' element={<LoginPage />} />
            <Route path='*' element={<Navigate to='/auth/login' />} />
          </>
          ) 
        : ( 
          <>
            <Route path='/' element={<CalendarPage />} /> 
            <Route path='/*' element={<Navigate to='/' />} />
          </>
          )
        }

      </Routes>
    </>
  );
};
