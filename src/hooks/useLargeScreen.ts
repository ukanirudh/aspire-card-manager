import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const useLargeScreen = (): boolean => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return matches;
}

export default useLargeScreen;