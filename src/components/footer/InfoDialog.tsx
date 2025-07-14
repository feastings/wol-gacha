import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import infoIcon from '/info.svg';
import { CREDITS, type Credit, type CreditTo } from './constants';

const InfoCopyrightNotice: React.FC = () => {
  return (
    <>
      <Typography variant="h2">Copyright Notice</Typography>
      <Typography>
        FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
        <br />
        FINAL FANTASY XIV © 2010 - 2025 SQUARE ENIX CO., LTD. All Rights Reserved.
        <br />
        Daily WoL is not affiliated with Square Enix.
      </Typography>
    </>
  );
};

const InfoResources: React.FC = () => {
  return (
    <>
      <Typography variant="h2">Resources</Typography>
      <table width="100%">
        <tbody>
          {CREDITS.map((credit: Credit) => (
            <tr key={credit.creditFor}>
              <td valign="top">
                <Typography variant="subtitle1">
                  {credit.creditFor}
                </Typography>
              </td>
              <td>
                <Stack direction="column">
                  {credit.creditToList.map((creditTo: CreditTo) => creditTo.link ? (
                    <Link
                      href={creditTo.link}
                      key={creditTo.name}
                      rel="noopener"
                      target="_blank"
                    >
                      <Typography>{creditTo.name}</Typography>
                    </Link>
                  ) : <Typography>{creditTo.name}</Typography>)}
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const InfoDialog: React.FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  return (
    <>
      <IconButton
        aria-describedby="footer-info-popover"
        aria-label="footer-info-button"
        sx={{ borderRadius: 3 }}
        onClick={() => setDialogOpen(true)}
      >
        <img src={infoIcon} />
      </IconButton>
      <Dialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogContent>
          <Stack spacing={2}>
            <InfoCopyrightNotice />
            <InfoResources />
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InfoDialog;
