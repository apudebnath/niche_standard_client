import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyOrders from '../MyOrders/MyOrders';
import { Button, Container, Grid } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import Reviews from '../Reviews/Reviews';
import Pay from '../Pay/Pay';
import useAuth from '../../../Hooks/useAuth';
import ManageProducts from '../ManageProducts/ManageProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddAProduct from '../AddAProduct/AddAProduct';
import Welcome from '../Welcome/Welcome';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 250;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const {logOutUser, admin} = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Divider />
                    <ListItem button>
                      <Link to={`${url}`} style={{textDecoration: 'none'}}>Welcome</Link>
                    </ListItem>
                    <Divider />
                {!admin && <Box>
                    <ListItem button>
                      <Link to={`${url}/myOrders`} style={{textDecoration: 'none'}}>My Orders</Link>
                    </ListItem>
                <Divider />
                <ListItem button>
                    <Link to={`${url}/reviews`} style={{textDecoration: 'none'}}>Reviews</Link>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Link to={`${url}/pay`} style={{textDecoration: 'none'}}>Pay</Link>
                </ListItem>
                    </Box>}
                <Divider />
                {admin && <Box>
                    <ListItem button>
                    <Link to={`${url}/manageAllOrders`} style={{textDecoration: 'none'}}>Manage All Orders</Link>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Link to={`${url}/manageProducts`} style={{textDecoration: 'none'}}>Manage Products</Link>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Link to={`${url}/makeAdmin`} style={{textDecoration: 'none'}}>Make Admin</Link>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Link to={`${url}/addAProduct`} style={{textDecoration: 'none'}}>Add a Products</Link>
                </ListItem>
                    </Box>}
                <Divider />
                <ListItem button>
                    <Button onClick={logOutUser} variant="text"style={{padding: '0px'}} >Log Out</Button>
                </ListItem>
                <Divider />
            </List>
            <Divider />
        </div>
    );
  
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
            <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  DashBoard
                </Typography>
                <Typography variant="h6" noWrap sx={{ml: 3}} ><Link to="/" style={{textDecoration: 'none', color: 'white'}}>Home</Link></Typography>
            </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
              open
            >
              {drawer}
            </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12}>
                              <Switch>
                                <Route exact path={path}>
                                  <Welcome></Welcome>
                                </Route>
                                <Route path={`${path}/myOrders`}>
                                  <MyOrders></MyOrders>
                                </Route>
                                <Route path={`${path}/reviews`}>
                                  <Reviews></Reviews>
                                </Route>
                                <Route path={`${path}/pay`}>
                                  <Pay></Pay>
                                </Route>
                                <AdminRoute path={`${path}/manageAllOrders`}>
                                  <ManageAllOrders></ManageAllOrders>
                                </AdminRoute>
                                <AdminRoute path={`${path}/manageProducts`}>
                                  <ManageProducts></ManageProducts>
                                </AdminRoute>
                                <AdminRoute path={`${path}/makeAdmin`}>
                                  <MakeAdmin></MakeAdmin>
                                </AdminRoute>
                                <AdminRoute path={`${path}/addAProduct`}>
                                  <AddAProduct></AddAProduct>
                                </AdminRoute>
                              </Switch>  
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
