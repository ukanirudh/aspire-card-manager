import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import { NavItemsList } from '../constants/NavItems';

const MobileNavigation = () => {
    const [value, setValue] = useState(1);

    return (
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {
            NavItemsList.map(({label, Icon}, index) => 
              <BottomNavigationAction key={label} disabled={index !== 1}  label={label} icon={<Icon />} />
            )
          }
        </BottomNavigation>
      </Paper>
    )
}

export default MobileNavigation;
