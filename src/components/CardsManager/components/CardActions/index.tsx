import React, { ReactElement } from 'react'
import Paper from '@mui/material/Paper';
import './CardActions.scss';

// freeze
// set spend limi
// add to gpay
// replace card
// cancel card

const CardActions = (): ReactElement => {
    return (
        <Paper variant="outlined" className='card-actions'>
            <div>Card actions</div>
        </Paper>
    )
}

export default CardActions;