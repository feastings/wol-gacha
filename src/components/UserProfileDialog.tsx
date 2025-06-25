import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { updateUserData } from '@api/store';
import { ACTION_ADD_ALERT, SUCCESS, useAlertDispatch } from '@context/AlertContext';
import {
  ACTION_UPDATE,
  ACTION_UPDATE_SUCCESS,
  STATE_LOADING,
  useUserContext,
  useUserDispatch,
  type UserData
} from '@context/UserContext';

type UserProfileDialogProps = {
  open: boolean,
  onClose: () => void,
};

// TODO: validate inputs
function UserProfileDialog({
  open,
  onClose,
}: UserProfileDialogProps) {
  const alertDispatch = useAlertDispatch();
  const userContext = useUserContext();
  const userDispatch = useUserDispatch();

  async function handleSave(userData: UserData) {
    userDispatch({ type: ACTION_UPDATE });
    await updateUserData(userData);
    userDispatch({ type: ACTION_UPDATE_SUCCESS, payload: userData });
    alertDispatch({
      type: ACTION_ADD_ALERT,
      payload: {
        id: 'update-user-profile',
        type: SUCCESS,
        message: 'User profile updated!'
      }
    });
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries()) as UserData;
    await handleSave(formJson);
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
            defaultValue={userContext.user?.nickname}
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
        <Button loading={userContext.status === STATE_LOADING} type="submit" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UserProfileDialog;
