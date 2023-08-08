import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import ErrorRadios from './ErrorRadios';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {SvgIcon} from '@mui/material';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [vote, setVote] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setVote(1); 
  };

  if (vote == 1){
    return(
      <Button
      startIcon={(
        <SvgIcon fontSize="small">
          <DoneAllIcon/>
        </SvgIcon>
      )}
      variant="contained"
      color="success"
    >
      Already Voted!
    </Button>
    );
  }
else {
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Vote
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Vote Here
        </BootstrapDialogTitle>
        <DialogContent dividers>
            <ErrorRadios/>
        </DialogContent>
        <DialogActions>
            <Button autoFocus onClick={handleClose} color="error">
                Close
            </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
}
