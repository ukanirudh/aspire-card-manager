import React, { ReactElement } from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CardsManager from './CardsManager/components';
import AddCard from './CardsManager/components/AddCard';
import './LandingPage.scss';
import DesktopNav from './DesktopNav';
import Box from '@mui/material/Box';
import useLargeScreen from '../hooks/useLargeScreen';
import MobileNavigation from './MobileNavigation';

const LandingPage = (): ReactElement => {
    const largeSc = useLargeScreen();
    return (
        <Box className='flex'>
            { largeSc && <DesktopNav />}
            <Box 
                component='div'
                className='flex column'
                sx={{flexGrow: 1, padding: largeSc ? '40px' : '24px'}}
            >
                <Typography variant="body2" gutterBottom>Available balance</Typography>
                <div className='flex row-center landing-toolpanel'>
                    <div className='flex row-center gap-12'>
                        <div className='aspire-box'>&#x24;</div>
                        <Typography variant="h5">3000</Typography>
                    </div>
                    <AddCard
                        RenderElement={
                            ({handleClickOpen}) =>
                                <Button
                                    startIcon={<AddCircleRoundedIcon />}
                                    variant="contained"
                                    onClick={handleClickOpen}>
                                        New Card
                                    </Button>
                        }
                    />
                </div>
                <CardsManager />
            </Box>
            { !largeSc && <MobileNavigation />}
        </Box>
    )
}

export default LandingPage;