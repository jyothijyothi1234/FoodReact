import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Grid } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import {  NavLink } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  
}));

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container item xs={12} alignItems="center">
            <Grid item xs={7} md={6} sx={{ display: "flex" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <FastfoodIcon />
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "goldenrod", marginLeft: 1 }}
              >
                My Restaurant
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={4}
            md={4}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: { xs: "space-around", md: "space-around" },
            }}
          >
            <NavLink  activeClassName="active" to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontSize: { xs: "5px", md: "20px" } }}
              >
                Home
              </Typography>
            </NavLink>

            <NavLink  activeClassName="active" to="/about" style={{ textDecoration: "none" }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontSize: { xs: "5px", md: "20px" } }}
              >
                About
              </Typography>
            </NavLink>

            <NavLink   activeClassName="active" to="/menu" style={{ textDecoration: "none" }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontSize: { xs: "5px", md: "20px" } }}
              >
                Menu
              </Typography>
            </NavLink>

            <NavLink  activeClassName="active" to="/contact" style={{ textDecoration: "none" }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontSize: { xs: "5px", md: "20px" } }}
              >
                Contact
              </Typography>
            </NavLink>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
       
        <List>
          <Grid
            container
            item
            xs={7}
            md={4}
            sx={{
              justifyContent: { xs: "space-around", md: "space-around" },
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <NavLink   activeClassName="active" to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontSize: { xs: "20px", md: "20px" },
                }}
              >
                Home
              </Typography>
            </NavLink>

            <NavLink  activeClassName="active"  to="/about" style={{ textDecoration: "none" }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontSize: { xs: "20px", md: "20px" } }}
              >
                About
              </Typography>
            </NavLink>

            <NavLink activeClassName="active" to="/menu" style={{ textDecoration: "none" }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontSize: { xs: "20px", md: "20px" } }}
              >
                Menu
              </Typography>
            </NavLink>

            <NavLink  activeClassName="active" to="/contact" style={{ textDecoration: "none" }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontSize: { xs: "20px", md: "20px" } }}
              >
                Contact
              </Typography>
            </NavLink>

          </Grid>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
