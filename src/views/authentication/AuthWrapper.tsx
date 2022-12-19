// material-ui
import { styled } from '@mui/material/styles';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
// ==============================|| AUTHENTICATION WRAPPER ||============================== //

const AuthComponent = styled('div')(({ theme }) => ({
  minHeight: '100vh'
}));

export default function AuthWrapper(props: any) {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) {
      navigate('/login');
    }
  }, [user, loading]);
  const { children } = props;
  if (user) {
    return <AuthComponent>{children}</AuthComponent>;
  }
  return <AuthComponent />;
}
