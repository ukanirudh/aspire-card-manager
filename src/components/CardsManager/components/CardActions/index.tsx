import React, { ReactElement } from 'react'
import Paper from '@mui/material/Paper';
import './CardActions.scss';
import Grid from '@mui/material/Grid';
import { ReactComponent as FreezeIcon } from '../../../../assets/icons/Freezecard.svg';
import { ReactComponent as DeactivateIcon } from '../../../../assets/icons/Deactivatecard.svg';
import { ReactComponent as GpayIcon } from '../../../../assets/icons/GPay.svg';
import { ReactComponent as ReplaceIcon } from '../../../../assets/icons/Replacecard.svg';
import { ReactComponent as SetLimitIcon } from '../../../../assets/icons/Setspendlimit.svg';
import Typography from '@mui/material/Typography';
import { useAppContext } from '../../../../context/AppContext';
import { CardsReducerAction } from '../../../../types';

interface CardActionsProps {
    setCurrentCardIndex: (index: number) => void;
    cardIndex: number;
}

const CardActions = ({ setCurrentCardIndex, cardIndex }: CardActionsProps): ReactElement => {
    const { dispatchAction, userCards } = useAppContext();
    const currentCardState = userCards[cardIndex];

    const onFreeze = () => {
        dispatchAction({
            type: CardsReducerAction.FREEZE_CARD,
            payload: { cardIndex }
        })
    }

    const onRemove = () => {
        dispatchAction({
            type: CardsReducerAction.REMOVE_CARD,
            payload: { cardIndex }
        });
        // reset to 0th index;
        setCurrentCardIndex(0);
    }

    return (
        <Paper variant="outlined" className='card-actions'>
            <Grid container columns={15} alignItems='center'>
                <Grid item container xs direction='column' alignItems='center'>
                    <Grid item>
                        <FreezeIcon className='cursor-pointer' onClick={onFreeze} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" gutterBottom>
                            {currentCardState.frozen ? 'UnFreeze Card' : 'Freeze card'}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container xs direction='column' alignItems='center'>
                    <Grid item>
                        <SetLimitIcon />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" gutterBottom>
                            Set spend limit
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container xs direction='column' alignItems='center'>
                    <Grid item>
                        <GpayIcon />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" gutterBottom>
                            Add to GPay
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container xs direction='column' alignItems='center'>
                    <Grid item>
                        <ReplaceIcon />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" gutterBottom>
                            Replace card
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container xs direction='column' alignItems='center'>
                    <Grid item>
                        <DeactivateIcon className='cursor-pointer' onClick={onRemove} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" gutterBottom>
                            Cancel card
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default CardActions;