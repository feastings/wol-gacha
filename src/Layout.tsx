import { useEffect } from 'react';
import { Outlet } from 'react-router';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

import { fetchUserData } from '@api/store';
import AppNav from '@components/AppNav';
import HomePartner from '@components/HomePartner';
import {
  ACTION_FETCH_SUCCESS,
  STATE_INIT,
  useUserContext,
  useUserDispatch
} from '@context/UserContext';

const Layout: React.FC = () => {
  const userContext = useUserContext();
  const userDispatch = useUserDispatch();
  const isWide = useMediaQuery((theme) => theme.breakpoints.up('sm'));

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
      <Grid display="flex" size="grow">
        <HomePartner displayAs={isWide ? 'side' : 'full'} />
      </Grid>
    );
  }

  function renderContent() {
    return (
      <Grid
        alignItems={isWide ? "center" : "flex-end"}
        display="flex"
        padding="20px"
        size={isWide ? 5 : 12}
      >
        <Stack spacing={2} width="100%">
          <AppNav />
          <Outlet />
        </Stack>
      </Grid>
    );
  }

  return (
    <Container disableGutters sx={{ display: 'flex', height: '100%' }}>
      <Grid
        container
        direction={isWide ? "row-reverse" : "column"}
        flexGrow={1}
      >
        {renderPartner()}
        {renderContent()}
      </Grid>
    </Container>
  )
};

export default Layout;
