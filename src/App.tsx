import { Route, Routes } from 'react-router';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import AppFooter from '@components/footer/AppFooter';
import { AlertProvider } from '@context/AlertContext.tsx'
import { UserProvider } from '@context/UserContext';
import Home from '@views/Home';
import Gallery from '@views/Gallery';

import Layout from './Layout';

// TODO: cuter theme :(
const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto Mono',
      'Roboto'
    ].join(','),
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500
    },
    subtitle1: {
      fontSize: '0.75rem',
      fontWeight: 500
    },
    body1: {
      fontSize: '0.75rem'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <UserProvider>
          <AlertProvider>
            <Grid container direction="column" height="100dvh" wrap="nowrap">
              <Grid minHeight={0} size="grow">
                <Routes>
                  <Route path="*" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="gallery" element={<Gallery />} />
                  </Route>
                </Routes>
              </Grid>
              <Grid>
                <AppFooter />
              </Grid>
            </Grid>
          </AlertProvider>
        </UserProvider>
    </ThemeProvider>
  );
};

export default App;
