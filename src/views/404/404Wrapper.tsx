// material-ui
import { styled } from '@mui/material/styles';

// ==============================|| AUTHENTICATION WRAPPER ||============================== //

const Page404Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

export default Page404Wrapper;
