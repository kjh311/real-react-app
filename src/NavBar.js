import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Star Wars", path: "/starwars" },
    // { text: "Image Gallery", path: "/imageGallery" },
    // { text: "Dog Pic", path: "/dogpic" },
    { text: "Joke", path: "/fetchjoke" },
    // { text: "Calculator", path: "/calculator" },
    // { text: "Counter", path: "/counter" },
    // // { text: "ArtFilter", path: "/artFilter" },
    // { text: "FilterFruit", path: "/filterFruits" },
    // { text: "Debounce", path: "/debounce" },
    // { text: "Phone", path: "/phone" },
    // { text: "Magic Cards", path: "/magicCards" },
    // { text: "UseRef", path: "/useRef" },
    { text: "Window", path: "/window" },
    { text: "Search Api", path: "/searchApi" },
    // { text: "Rest Api", path: "/restAPI" },
    // { text: "DB Api", path: "/dbJson" },
    { text: "Products API", path: "/products" },
    // { text: "Day Night", path: "/dayNight" },
    // { text: "LS To Do", path: "/local" },
    // { text: "Rick and Morty", path: "/rick" },
    // { text: "Count Words", path: "/countWords" },
    { text: "Pokemon Cards", path: "/pokemon" },
    { text: "Country API", path: "/CountryApi" },
    { text: "useReducer Counter", path: "/counterUseReducer" },
    { text: "useReducer Name", path: "/nameUseReducer" },
    { text: "TailWind", path: "/tailWind" },
    { text: "Shopping Cart", path: "/shoppingCart" },
    { text: "Habit Tracker", path: "/habitTracker" },
    // { text: "Drinks", path: "/drinkRecipes" },
    // { text: "Weather API", path: "/weatherApi" },
    // { text: "Auto Count", path: "/autoCount" },
    // { text: "Remove Item", path: "/removeItem" },
    // { text: "Character Count", path: "/characterCount" },
    // { text: "Create List", path: "/createList" },
    // { text: "Checked Hook", path: "/checkedHook" },
    // { text: "Name", path: "/name" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <AppBar position="static">
        <Toolbar>
          {/* Menu Icon for Mobile */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* App Title */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.path}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer (Sidebar) */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
