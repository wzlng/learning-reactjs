import { Button, Container, Typography } from '@mui/material';
import AuthWrapper from 'views/authentication/AuthWrapper';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { logout } from '../../firebase';
import Header from '../header/index';

const theme = createTheme();

const sections = [
  { title: 'Account', url: '#' },
  { title: 'Project', url: '#' },
  { title: 'Allocation', url: '#' }
];

// ===============================|| DASHBOARD - MAIN ||=============================== //

export default function Dashboard() {
  return (
    <AuthWrapper>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Blog" sections={sections} logout={logout} />
          <Typography variant="h1">Abc</Typography>
        </Container>
      </ThemeProvider>
    </AuthWrapper>
  );
}
