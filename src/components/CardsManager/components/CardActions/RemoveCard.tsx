import React, { ReactElement, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

interface AddCardProps {
    RenderElement: (props: {handleClickOpen: () => void}) => ReactElement;
    submitAction: () => void;
}

const RemoveCard = ({ RenderElement, submitAction }: AddCardProps): ReactElement => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmit = () => {
        submitAction();
        setOpen(false);
    }

    return (
        <>
            <RenderElement handleClickOpen={handleClickOpen} />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Cancel Card</DialogTitle>
                <DialogContent>
                    <p>Are you sure you want to cancel this card?</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button color="error" variant="contained" onClick={handleSubmit}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default RemoveCard;