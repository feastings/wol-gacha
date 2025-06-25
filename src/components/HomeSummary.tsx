import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import UserProfileDialog from '@components/UserProfileDialog';
import UserContext from '@context/UserContext';
import userIcon from '/user.svg';

function HomeSummary() {
  const nickname = useContext(UserContext)?.nickname;
  const [isModalOpen, setIsModalOpen] = useState(false);

  function renderNickname() {
    return [
      <h1>{nickname}</h1>,
      <IconButton
        aria-label="edit-profile"
        sx={{ borderRadius: 3 }}
        onClick={() => setIsModalOpen(true)}
      >
        <img src={userIcon} />
      </IconButton>
    ]
  };

  return (
    <>
      <UserProfileDialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Paper elevation={5} sx={{ borderRadius: 3, width: '100%' }}>
        <Container sx={{ paddingY: 3 }}>
          <Stack spacing={2}>
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
            >
              {renderNickname()}
            </Stack>
            <Button disabled variant="outlined" sx={{ width: '100%' }}>
              Next pull in XX:XX:XX...
            </Button>
          </Stack>
        </Container>
      </Paper>
    </>
  );
};

export default HomeSummary;
