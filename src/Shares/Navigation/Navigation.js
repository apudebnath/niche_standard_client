import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import logo from '../../images/logo.png';

const Navigation = () => {
    const {user, logOutUser} = useAuth();
    const theme = useTheme();
    
    const useStyle = makeStyles({
        navButton: {
            background: '#17252A !important',
            color: '#ffffff !important'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
              }
        },
        navItemGroup: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
              }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right !important',
                width: '80%'
              },
            [theme.breakpoints.up('sm')]: {
                textAlign: 'left !important',
                width: '30%'
              }
        },
        linkStyle:{
            textDecoration: 'none'
        }
        
    })
    const {navButton, navIcon, navItemGroup, navLogo, linkStyle} = useStyle();

    const [state, setState] = React.useState(false);

    const list = (
        <Box
          sx={{ width: 250 }}
          role="presentation"
        >
            <List>
                <Divider />
                <ListItem button>
                    <ListItemText><Link to="/" className={linkStyle} >Home</Link></ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText><Link to="/exploreproducts" className={linkStyle} >Explore</Link></ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText><Link to="/register" className={linkStyle} >Register</Link></ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText><Link to="/dashboard" className={linkStyle} >Dashboard</Link></ListItemText>
                </ListItem>
                <Divider />
                {!user?.email ? 
                <>
                    <ListItem button>
                        <ListItemText>
                            <Link to="/login" className={linkStyle} >Login</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                </>
                :
                <Button onClick={logOutUser} className={navButton} >LogOut</Button>}
                <Divider />
            </List>
        
        </Box>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1, }}>
                <AppBar position="static" sx={{backgroundColor: '#3AAFA9', pt:1}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className= {navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo}component="div" sx={{ flexGrow: 1 }}>
                            <img className={navLogo} src={logo} alt=""/>
                        </Typography>
                        <Box className={navItemGroup}>
                            <NavLink
                                to="/"
                                activeStyle={{
                                    fontWeight: "normal",
                                    color: "lightblue"
                                }}
                                style={{textDecoration: 'none', color: 'white', marginRight: '10px'}}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/exploreproducts"
                                activeStyle={{
                                    fontWeight: "normal",
                                    color: "lightblue"
                                }}
                                style={{textDecoration: 'none', color: 'white', marginRight: '10px'}}
                            >
                                Explore
                            </NavLink>
                            <NavLink
                                to="/register"
                                activeStyle={{
                                    fontWeight: "normal",
                                    color: "lightblue"
                                }}
                                style={{textDecoration: 'none', color: 'white', marginRight: '10px'}}
                            >
                                Register
                            </NavLink>
                            {  !user?.email ?
                            <NavLink
                                to="/login"
                                activeStyle={{
                                    fontWeight: "normal",
                                    color: "lightblue"
                                }}
                                style={{textDecoration: 'none', color: 'white', marginRight: '10px'}}
                            >
                                Login
                            </NavLink>
                            :
                            <>
                                <NavLink
                                to="/dashboard"
                                activeStyle={{
                                    fontWeight: "normal",
                                    color: "lightblue"
                                }}
                                style={{textDecoration: 'none', color: 'white', marginRight: '10px'}}
                            >
                                Dashboard
                            </NavLink>
                                <Button onClick={logOutUser} className={navButton}>LogOut</Button>
                            </>
                            }
                        </Box>
                        
                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                <div>
                      <React.Fragment>
                        <Drawer
                          open={state}
                          onClose={() => setState(false)}
                        >
                          {list}
                        </Drawer>
                      </React.Fragment>
                </div>
            </Box>
        </>
    );
};

export default Navigation;

