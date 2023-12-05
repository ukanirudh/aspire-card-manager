import React, { ReactElement, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardActions from './CardActions';
import useLargeScreen from '../../../hooks/useLargeScreen';
import { useTheme } from '@mui/material/styles';
import CardList from './CardList';
import CardDetails from './CardDetails';
import Typography from '@mui/material/Typography';
import { useAppContext } from '../../../context/AppContext';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';

const CardsManager = (): ReactElement => {
    const [curTab] = useState<number>(0);
    const { userCards } = useAppContext();
    const [cardIndex, setCurrentCardIndex] = useState<number>(0);
    const matches = useLargeScreen();
    const theme = useTheme();

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Tabs value={curTab}>
                    <Tab label="My debit cards" />
                    <Tab label="All company cards" disabled />
                </Tabs>
            </Box>
            {
                curTab === 0 && (
                    <Paper
                        elevation={3}
                        sx={{ marginTop: theme.spacing(2)}}
                    >
                        <Box 
                            sx={{
                                margin: matches ? theme.spacing(5) : theme.spacing(2),
                            }}
                        >
                            <Grid container spacing={4}>
                                {
                                    userCards.length > 0 ? (
                                        <>
                                            <Grid item container direction='column' xs={12} md={12} lg={7}>
                                                    <div className='flex justtify-end'>
                                                        <Button classes={{text: 'color-base'}} variant="text" startIcon={<VisibilityIcon />}>
                                                            Show card number
                                                        </Button>
                                                    </div>
                                                <CardList cardIndex={cardIndex} setCurrentCardIndex={setCurrentCardIndex} />
                                                <CardActions cardIndex={cardIndex} setCurrentCardIndex={setCurrentCardIndex} />
                                            </Grid>
                                            <Grid item container direction='column' xs={12} md={12} lg={5}>
                                                { matches &&  <div className='dummy-container'></div> }
                                                <CardDetails cardIndex={cardIndex} />
                                            </Grid>
                                        </>
                                    ) : (
                                        <Grid container item xs={12} justifyContent='center'>
                                            <Typography variant="h2" gutterBottom>
                                                No Cards
                                            </Typography>
                                        </Grid>
                                    )
                                }
                            </Grid>
                        </Box>
                    </Paper>
                )
            }
        </>
    )
}

export default CardsManager;