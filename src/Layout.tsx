import { useEffect } from 'react';
import { Outlet } from 'react-router';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

import { fetchUserData } from '@api/store';
import AppNav from '@components/AppNav';
import AppPartner from '@components/AppPartner';
import {
  ACTION_FETCH_SUCCESS,
  STATE_INIT,
  useUserContext,
  useUserDispatch
} from '@context/UserContext';

const Layout: React.FC = () => {
  const userContext = useUserContext();
  const userDispatch = useUserDispatch();
  const isLandscape = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  async function initData() {
    const res = await fetchUserData();
    userDispatch({ type: ACTION_FETCH_SUCCESS, payload: res })
  }

  useEffect(() => {
    if (userContext.status === STATE_INIT) {
      initData();
    }
  });

  function renderPartner() {
    return (
      <Grid display="flex" size="grow" maxHeight="100%">
        <AppPartner displayAs={isLandscape ? 'side' : 'full'} />
      </Grid>
    );
  }

  function renderContent() {
    return (
      <Grid
        alignItems={isLandscape ? "center" : "flex-end"}
        display="flex"
        padding="20px"
        size={isLandscape ? 5 : 12}
        maxHeight="100%"
      >
        <Stack
          justifyContent="center"
          spacing={2}
          height="100%"
          width="100%"
          maxHeight="100%"
        >
          <AppNav />
          <Paper
            elevation={5}
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
              width: '100%',
              maxHeight: '100%'
            }}
          >
            <Container sx={{ display: 'flex', maxHeight: '100%', paddingY: 3 }}>
              <Outlet />
            </Container>
          </Paper>
        </Stack>
      </Grid>
    );
  }

  return (
    <Container disableGutters sx={{ display: 'flex', height: '100%' }}>
      <Grid
        container
        direction={isLandscape ? "row-reverse" : "column"}
        flexGrow={1}
        maxHeight="100%"
      >
        {renderPartner()}
        {renderContent()}
      </Grid>
    </Container>
  )
};

export default Layout;
