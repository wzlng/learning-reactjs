import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Button, Container, Typography } from '@mui/material';

// assets
import { ReactComponent as ErrorText } from 'assets/images/error/img-error-text.svg';

// project imports
import Page404Wrapper from './404Wrapper';

// ==============================|| 404 PAGE ||============================== //

function Page404() {
  return (
    <Page404Wrapper>
      <Container>
        <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
          <Typography variant="h1" paragraph>
            Sorry, page not found!
          </Typography>
          <Typography variant="body2">
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
            sure to check your spelling.
          </Typography>

          <ErrorText width="100%" />

          <Button to="/" size="large" variant="contained" component={RouterLink}>
            Go to Home
          </Button>
        </Box>
      </Container>
    </Page404Wrapper>
  );
}

export default Page404;
