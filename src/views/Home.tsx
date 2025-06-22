import { useState } from 'react';
import Grid from '@mui/material/Grid';
import HomePartner from '@/components/HomePartner';
import HomeSummary from '@/components/HomeSummary';
import useMediaQuery from '@mui/material/useMediaQuery';

function Home() {
  const isWide = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [isSummaryVisible] = useState(true);

  function renderSummary() {
    if (!isSummaryVisible) {
      return null;
    }
  
    return (
      <Grid
        alignItems="center"
        display="flex"
        height="100%"
        margin={isWide ? undefined : "0 auto"}
        position={isWide ? undefined : "absolute"}
        size={isWide ? 4 : 12}
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
      flexGrow={1}
    >
      {renderSummary()}
      {renderPartner()}
    </Grid>
  );
};

export default Home;
