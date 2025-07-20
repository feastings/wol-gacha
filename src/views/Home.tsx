import { useState } from 'react';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import UserProfileDialog from '@components/UserProfileDialog';
import { STATE_INIT, useUserContext } from '@context/UserContext';
import userIcon from '/user.svg';

function Home() {
  const userContext = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function renderNickname() {
    return [
      <h1 key="nickname">{userContext.user?.nickname}</h1>,
      <IconButton
        aria-label="edit-profile-button"
        key="edit-profile-button"
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
      <Stack spacing={2} width="100%">
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
        >
          {userContext.status === STATE_INIT ? <Skeleton width="100%" /> : renderNickname()}
        </Stack>
        {userContext.status === STATE_INIT ? <Skeleton /> : (
          <Button disabled variant="outlined" sx={{ width: '100%' }}>
            Next pull in XX:XX:XX...
          </Button>
        )}
      </Stack>
    </>
  );
};

export default Home;
