import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { useRef } from 'react';
import MuiButton from '@/components/mui-components/button/MuiButton';

type DialogType = {
  open: boolean;
  onClose: () => void;
  width: string;
};
function PaperComponent(props: PaperProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  return (
    <Draggable nodeRef={nodeRef as React.RefObject<HTMLDivElement>} handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  );
}

const MuiDialog: React.FC<DialogType> = ({ open, onClose, width }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        PaperComponent={PaperComponent}
        sx={{
          '& .MuiDialog-container': {
            '& .MuiPaper-root': {
              width: '100%',
              maxWidth: width,
              minWidth: '500px',
              borderRadius: '15px',
              zIndex: '1',
            },
          },
        }}
      >
        <DialogTitle style={{ cursor: 'pointer' }} id="draggable-dialog-title">
          Draggable
        </DialogTitle>
        <DialogContent>{/* <DialogContentText>World</DialogContentText> */}</DialogContent>
        <DialogActions>
          <MuiButton type="cancel-btn" onClick={onClose}>
            Cancel
          </MuiButton>
          <MuiButton type="submit">Submit</MuiButton>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default MuiDialog;
