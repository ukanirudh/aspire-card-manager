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
import RemoveCard from './RemoveCard';

const CardActions = (): ReactElement => {
    const { dispatchAction, userCards, cardIndex } = useAppContext();
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
    }

    return (
        <Paper variant="outlined" className='card-actions'>
            <Grid container columns={15} alignItems='center'>
                <Grid item container xs direction='column' alignItems='center' wrap="nowrap">
                    <Grid item>
                        <FreezeIcon className='cursor-pointer' onClick={onFreeze} />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography variant="body2" gutterBottom noWrap>
                            {currentCardState.frozen ? 'UnFreeze Card' : 'Freeze card'}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container xs direction='column' alignItems='center' wrap="nowrap">
                    <Grid item>
                        <SetLimitIcon />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography variant="body2" gutterBottom noWrap>
                            Set spend limit
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container xs direction='column' alignItems='center' wrap="nowrap">
                    <Grid item>
                        <GpayIcon />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography variant="body2" gutterBottom noWrap>
                            Add to GPay
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container xs direction='column' alignItems='center' wrap="nowrap">
                    <Grid item>
                        <ReplaceIcon />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography variant="body2" gutterBottom noWrap>
                            Replace card
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container xs direction='column' alignItems='center' wrap="nowrap">
                    <Grid item>
                        <RemoveCard
                            RenderElement={({handleClickOpen}) =>
                                <DeactivateIcon className='cursor-pointer' onClick={handleClickOpen} />
                            }
                            submitAction={onRemove}
                        />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography variant="body2" gutterBottom noWrap>
                            Cancel card
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default CardActions;