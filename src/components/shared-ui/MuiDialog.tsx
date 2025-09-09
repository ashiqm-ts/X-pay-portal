import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { useRef, useState } from 'react';
import MuiButton from '@/components/mui-components/button/MuiButton';
import { Typography } from '@mui/material';

type DialogType = {
  open: boolean;
  onClose: () => void;
  width: string;
  children: React.ReactNode;
  dialogTitle?: string;
};
function PaperComponent(props: PaperProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleStop: DraggableEventHandler = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Draggable nodeRef={nodeRef} handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'} position={position} onStop={handleStop}>
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  );
}

const MuiDialog: React.FC<DialogType> = ({ open, onClose, width, children, dialogTitle }) => {
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
        <DialogTitle sx={{ cursor: 'pointer' }} id="draggable-dialog-title">
          <Typography fontSize={16} fontWeight={600} mt={1}>
            {' '}
            {dialogTitle}
          </Typography>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions sx={{ margin: '10px' }}>
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
