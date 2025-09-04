
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
    children:React.ReactNode;
    dialogTitle?:string;
}
function PaperComponent(props: PaperProps) {
    const nodeRef = useRef<HTMLDivElement>(null);
    return (
        <Draggable
            nodeRef={nodeRef as React.RefObject<HTMLDivElement>}
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} ref={nodeRef} />
        </Draggable>
    );
}

const MuiDialog: React.FC<DialogType> = ({ open, onClose,width,children,dialogTitle }) => {
    return (
        <>
            <Dialog open={open}
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
                }}>
                <DialogTitle sx={{ cursor: 'pointer', fontSize: '16px', color: 'var(--color-primary)', fontWeight: 'bold',marginTop:"10px" }} id="draggable-dialog-title">{dialogTitle}</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>World</DialogContentText> */}
                    {children}
                </DialogContent>
                <DialogActions sx={{marginRight:"14px",marginBottom:"14px"}}>
                    <MuiButton type="cancel-btn" onClick={onClose}>Cancel</MuiButton>
                    <MuiButton type="submit">Submit</MuiButton>
                </DialogActions>

            </Dialog>
        </>
    );
}
export default MuiDialog;