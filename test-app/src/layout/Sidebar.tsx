import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import MapIcon from '@mui/icons-material/Map';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { SideMenuProps } from '../interface/ElementProps';
import { drawerWidth } from '../config/conf';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const SideBar = ({ openSide, setOpenClose }: SideMenuProps) => {
    const theme = useTheme();

    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={openSide}
            >
                <DrawerHeader>
                    <IconButton onClick={() => setOpenClose(false)}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                <ListItem key={'menu2'} disablePadding>
                        <ListItemButton dir='rtl'>
                            <ListItemIcon>
                                <ShowChartIcon />
                            </ListItemIcon>
                            <ListItemText className='text-right w-full'>
                                <Link to="/"> <b > داشبورد</b> </Link>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem key={'menu1'} disablePadding>
                        <ListItemButton dir='rtl'>
                            <ListItemIcon>
                                <PeopleAltIcon />
                            </ListItemIcon>
                            <ListItemText className='text-right w-full'>
                                <Link to="/user"> <b > کاربران</b> </Link>

                            </ListItemText>
                        </ListItemButton>


                    </ListItem>
                    <ListItem key={'menu2'} disablePadding>
                        <ListItemButton dir='rtl'>
                            <ListItemIcon>
                                <ProductionQuantityLimitsIcon />
                            </ListItemIcon>
                            <ListItemText className='text-right w-full'>
                                <Link to="/product"> <b >محصولات </b> </Link>

                            </ListItemText>
                        </ListItemButton>
                    </ListItem>


                    <ListItem key={'menu2'} disablePadding>
                        <ListItemButton dir='rtl'>
                            <ListItemIcon>
                                <MapIcon />
                            </ListItemIcon>
                            <ListItemText className='text-right w-full'>
                                <Link to="/map"> <b > نقشه</b> </Link>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>

            </Drawer>

        </>
    )
}

export default SideBar