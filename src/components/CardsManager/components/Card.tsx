import React, { ReactElement } from 'react'
import Paper from '@mui/material/Paper';
import '../styles/Card.scss'
import { CardData } from '../../../types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ReactComponent as AspireLogo } from '../../../assets/icons/AspireLogo.svg';
import { ReactComponent as VisaLogo } from '../../../assets/icons/Visa_Logo.svg';
import StarIcon from '@mui/icons-material/Star';

interface CardProps {
    cardData: CardData;
}

const Card = ({cardData}: CardProps): ReactElement => {
    const { number, name,  expiry, frozen, showNumber } = cardData;
    const month = new Date(expiry).getMonth();
    const year = new Date(expiry).getFullYear();

    const expiryFinal = !isNaN(month) && !isNaN(year) ? `${month+1}/${year.toString().slice(-2)}` : 'Invalid';
    const numberSplitMatch = number.match(/.{1,4}/g);

    return (
        <Paper variant="outlined" className='aspire-card' sx={{
            opacity: frozen ? 0.5 : 1
        }}>
            <div className='card-logo'>
                <AspireLogo />
            </div>
            <Grid container xs alignSelf='center'>
                <Grid item xs={12}>
                    <Typography className='font-white' variant="h5" gutterBottom>{name}</Typography>
                </Grid>
                <Grid container xs={10}>
                {
                    numberSplitMatch?.map((splitNumber, index) => {
                        let cardSplitMask: Array<string> | string = splitNumber;
                        if (!showNumber) {
                            cardSplitMask = splitNumber.split('').fill('\u2022');
                        }
                        return (
                            <Grid item xs key={splitNumber}>
                                <Typography className='font-white card-font' variant="h6">
                                    { index === (numberSplitMatch?.length-1) ? splitNumber : cardSplitMask }
                                </Typography>
                            </Grid>
                        )
                    })
                }
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography className='font-white' variant="h6">
                            Thru: {expiryFinal}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='font-white flex row-center'>
                            <Typography variant="h6">
                                CVV:
                            </Typography>
                            <div>
                                <StarIcon /><StarIcon /><StarIcon />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <div className='card-logo'>
                <VisaLogo />
            </div>
        </Paper>
    )
}

export default Card;