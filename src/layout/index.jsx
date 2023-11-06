import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  Collapse,
  styled,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { menuItems } from "../data/menu";
import { Logo } from "../assets";
import Database from "../pages/Database";
import CustomerTable from "../components/DataTable";

const drawerWidth = 200;

const LogoBox = styled("div")({
  textAlign: "center",
  width: "95%",
  height: "120px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const PipeLms = styled("div")({
  width: "100%",
  height: "38px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#1A73E8",
});

const ItemName = styled("div")({
  fontWeight: "bolder",
  paddingLeft: "2px",
  lineHeight: 2,
});

const DrawerContent = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(open);
  };

  return (
    <>
      <LogoBox>
        <img src={Logo} alt="Logo" />
      </LogoBox>
      <PipeLms>
        <Typography
          sx={{ fontWeight: "400", color: "#fff", marginRight: "4px" }}
          variant="p"
        >
          PIPE
        </Typography>
        <Typography sx={{ opacity: "0.7", color: "#fff" }} variant="p">
          LMS
        </Typography>
      </PipeLms>

      <List sx={{ mt: 5 }}>
        {menuItems.map((item, index) => (
          <div key={index}>
            <ListItemButton onClick={item.options ? handleClick : null}>
              <Box
                sx={{
                  display: "flex",
                  width: "90%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ItemName>{item.name}</ItemName>
                {item.options ? open ? <ExpandLess /> : <ExpandMore /> : null}
              </Box>
            </ListItemButton>
            {item.options ? (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.items.map((subItem, subIndex) => (
                    <ListItem key={subIndex}>
                      <ListItemButton sx={{ background: subItem.color }}>
                        <Box>{subItem.name}</Box>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            ) : null}
          </div>
        ))}
      </List>
    </>
  );
};

const ResponsiveDrawer = ({ window }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Database
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 1201 }}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        style={{ position: "fixed", top: 0, left: 0, zIndex: 1200 }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <DrawerContent />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <DrawerContent />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          position: "relative",
          overflow: "auto",
          marginLeft: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <CustomerTable
          style={{ position: "fixed", top: 0, right: 0, zIndex: 1201 }}
        />
      </Box>
    </Box>
  );
};

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
