import { useContext, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import UserContext, { type UserData } from '@/context/UserContext';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

type UserProfileDialogProps = {
  open: boolean,
  onClose: () => void,
};

// TODO: validate inputs
function UserProfileDialog({
  open,
  onClose,
}: UserProfileDialogProps) {
  const nickname = useContext(UserContext)?.nickname;
  const [isSaving, setIsSaving] = useState(false);

  async function handleSave(userData: UserData) {
    // TODO: write to localstorage for now w/ simulated load time
    // push feedback alerts also
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
    await delay(3000);
    if (userData?.nickname) {
      localStorage.setItem('nickname', userData.nickname);
    }
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries()) as UserData;
    await handleSave(formJson);
    setIsSaving(false);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          component: 'form',
          onSubmit: handleSubmit
        }
      }}
    >
      <DialogTitle>User Profile</DialogTitle>
      <DialogContent>
        <Container>
          <TextField
            defaultValue={nickname}
            label="nickname"
            margin="dense"
            name="nickname"
            variant="standard"
          />
        </Container>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>
        <Button loading={isSaving} type="submit" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UserProfileDialog;
