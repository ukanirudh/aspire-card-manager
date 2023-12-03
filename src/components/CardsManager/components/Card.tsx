import React, { ReactElement } from 'react'
import Paper from '@mui/material/Paper';
import './Card.scss'
import { CardData } from '../../../types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

//show card num
//logo

interface CardProps {
    cardData: CardData;
}

const Card = ({cardData}: CardProps): ReactElement => {
    const { number, name, cvv, expiry, frozen } = cardData;
    const month = new Date(expiry).getMonth();
    const year = new Date(expiry).getFullYear();

    const expiryFinal = !isNaN(month) && !isNaN(year) ? `${month+1}/${year.toString().slice(-2)}` : 'Invalid';
    return (
        <Paper variant="outlined" className='aspire-card' sx={{
            opacity: frozen ? 0.5 : 1
        }}>
            <Grid container alignSelf='center'>
                <Grid item xs={12}>
                    <Typography className='font-white' variant="h5" gutterBottom>{name}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className='font-white' variant="body2">{number}</Typography>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography className='font-white' variant="caption">
                            Thru: {expiryFinal}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className='font-white' variant="caption">
                            CVV: {cvv}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Card;