import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

function HomeSummary() {
  return (
    <Paper
      elevation={1}
      sx={{ width: '100%' }}
    >
      <Container sx={{ paddingY: 3 }}>
        <h1>feasts</h1>
        <Button disabled variant="outlined" sx={{ width: '100%' }}>
          Next pull in XX:XX:XX...
        </Button>
      </Container>
    </Paper>
  );
};

export default HomeSummary;
