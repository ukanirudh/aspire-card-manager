import React, { ReactElement } from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CardsManager from './CardsManager/components';
import './LandingPage.scss';

const LandingPage = (): ReactElement => {
    return (
        <div className='flex column'>
            <Typography variant="body2" gutterBottom>Available balance</Typography>
            <div className='flex row-center landing-toolpanel'>
                <div className='flex row-center gap-12'>
                    <div className='aspire-box'>&#x24;</div>
                    <Typography variant="h5">3000</Typography>
                </div>
                <Button startIcon={<AddCircleRoundedIcon />} variant="contained">New Card</Button>
            </div>
            <CardsManager />
        </div>
    )
}

export default LandingPage;