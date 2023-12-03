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

const CardsManager = (): ReactElement => {
    const [curTab] = useState<number>(0);
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
                        sx={{
                            marginTop: matches ? theme.spacing(2) : 0,
                        }}>
                            <Box 
                                sx={{
                                    margin: matches ? theme.spacing(5) : 0,
                                }}
                            >
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={7}>
                                        <CardList cardIndex={cardIndex} setCurrentCardIndex={setCurrentCardIndex} />
                                        <CardActions cardIndex={cardIndex} setCurrentCardIndex={setCurrentCardIndex} />
                                    </Grid>
                                    <Grid item xs={12} md={5}>
                                        <div>Anirudh</div>
                                    </Grid>
                                </Grid>
                            </Box>
                    </Paper>
                )
            }
        </>
    )
}

export default CardsManager;