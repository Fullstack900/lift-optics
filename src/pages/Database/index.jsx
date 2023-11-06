import React from "react";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "../../components/SearchBar";
import CustomButton from "../../components/Button";
import { Notification_Button, Return_Button } from "../../assets";

const Database = ({ handleDrawerToggle, drawerWidth }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#fff",
        width: !matches ? "100%" : { sm: `calc(100% - ${drawerWidth}px)` },
        top: 0,
        // zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            {matches ? (
              <Typography
                sx={{ color: "#6e6e6e" }}
                variant="h6"
                noWrap
                component="div"
              >
                Database
              </Typography>
            ) : (
              Database
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <SearchBar />
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            <Box display="flex" justifyContent="flex-end" alignItems="center">
              {matches && (
                <>
                  <img src={Notification_Button} alt="Notification-Icon" />
                  <img src={Return_Button} alt="Return-Icon" />
                  <CustomButton />
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Database;
