import React, { ReactElement } from 'react';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { ReactComponent as AspireLogo } from '../assets/icons/AspireLogo.svg';
import { NavItemsList } from '../constants/NavItems';

const drawerWidth = 240;

const DesktopNav = (): ReactElement => {
    return (
        <Drawer
            className='desktop-nav'
            sx={{
                width: drawerWidth,
                display: { xs: 'none', md: 'block' },
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    backgroundColor: '#0C365A',
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
            >
            
            <List>
                <ListItem key='aspire-logo'>
                    <AspireLogo  />
                </ListItem>
                <ListItem className='nav-text' key='text-secondary'>
                    <ListItemText secondary="Trusted way of banking for 3,000+ SMEs and startups in Singapore" />
                </ListItem>
                {NavItemsList.map(({Icon, label}, index) => (
                    <ListItem key={label}>
                        <ListItemButton selected={index === 1} disabled={index !== 1} className='nav-list-item'>
                            <ListItemIcon className='nav-list-item'>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default DesktopNav;