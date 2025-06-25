import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { fetchUserData } from '@api/store';
import HomePartner from '@components/HomePartner';
import HomeSummary from '@components/HomeSummary';
import { ACTION_FETCH_SUCCESS, STATE_INIT, useUserContext, useUserDispatch } from '@context/UserContext';

function Home() {
  const userContext = useUserContext();
  const userDispatch = useUserDispatch();
  const isWide = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [isSummaryVisible] = useState(true);

  async function initData() {
    const res = await fetchUserData();
    userDispatch({ type: ACTION_FETCH_SUCCESS, payload: res })
  }

  useEffect(() => {
    if (userContext.status === STATE_INIT) {
      initData();
    }
  });

  function renderSummary() {
    if (!isSummaryVisible) {
      return null;
    }
  
    return (
      <Grid
        alignItems={isWide ? "center" : "flex-end"}
        display="flex"
        height="100%"
        padding="20px"
        position={isWide ? undefined : "absolute"}
        size={isWide ? 5 : 12}
      >
        <HomeSummary />
      </Grid>
    );
  }

  function renderPartner() {
    return (
      <Grid display="flex" size={isWide ? "grow" : 12}>
        <HomePartner displayAs={isSummaryVisible && isWide ? 'side' : 'full'} />
      </Grid>
    );
  }

  return (
    <Grid
      container
      direction="row-reverse"
      flexGrow={1}
    >
      {renderPartner()}
      {renderSummary()}
    </Grid>
  );
};

export default Home;
