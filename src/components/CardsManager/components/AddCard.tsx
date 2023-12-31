import React, { ReactElement, useState, useRef, ChangeEvent } from 'react'
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppContext } from '../../../context/AppContext';
import { CardsReducerAction } from '../../../types';

interface AddCardProps {
    RenderElement: (props: {handleClickOpen: () => void}) => ReactElement;
}

const AddCard = ({ RenderElement }: AddCardProps): ReactElement => {
    const { dispatchAction } = useAppContext();
    const [open, setOpen] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);
    const nameRef = useRef<HTMLInputElement>(null);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setHasError(false);
    };

    const handleSubmit = () => {
        if(!hasError) {
            dispatchAction({
                type: CardsReducerAction.ADD_CARD,
                payload: { name: nameRef.current?.value }
            })
            setOpen(false);
        }
    }

    const onValidationHandle = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(!e.target.value) {
            setHasError(true);
        } else {
            setHasError(false);
        }
    }

    return (
        <>
            <RenderElement handleClickOpen={handleClickOpen} />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Card</DialogTitle>
                <DialogContent>
                <TextField
                    required
                    onChange={onValidationHandle}
                    inputRef={nameRef}
                    autoFocus
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    error={hasError}
                    helperText={hasError ? 'Invalid input' : ''}
                    onBlur={onValidationHandle}
                />
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleSubmit}>Add Card</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddCard;