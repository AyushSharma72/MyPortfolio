import React, { useEffect, useState } from "react";

//drawer
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { FaHome } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

  const drawerWidth = 240;

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
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

const Header = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [hash, setHash] = useState("Home");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const checkActivePage = () => {
    document.querySelectorAll(".navbar a").forEach((activePage) => {
      if (activePage.getAttribute("name") === hash) {
        activePage.classList.add("active");
      } else {
        activePage.classList.remove("active");
      }
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset value in pixels
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
      setHash(id);
    }
  };

  useEffect(() => {
    checkActivePage();
  }, [hash]);

  return (
    <div>
      <div
        className="navbar w-[100%] py-3 fixed top-0 left-0 right-0 z-10 hidden md:block backdrop-blur-md "
        id="header"
      >
        <div className="lg:w-[81%] lg:flex md:w-full md:flex justify-between items-center mx-auto">
          <div className="w-3/4 flex justify-around">
            <div className="text-3xl font-bold text-white">
              Ayush <span className="bluegradient">Sharma</span>
            </div>
            <div className="w-[60%] flex justify-around mt-2 font-bold cursor-pointer">
              <a
                onClick={() => {
                  scrollToSection("home");
                  setHash("home");
                }}
                name="home"
              >
                Home
              </a>
              <a
                onClick={() => {
                  scrollToSection("skills");
                  setHash("skills");
                }}
                name="skills"
              >
                Skills
              </a>
              <a
                onClick={() => {
                  scrollToSection("projects");
                  setHash("projects");
                }}
                name="projects"
              >
                Projects
              </a>
              <a
                onClick={() => {
                  scrollToSection("contact");
                  setHash("contact");
                }}
                name="contact"
              >
                Contact me
              </a>
            </div>
          </div>
          <div className="mr-5">
            <a href="AyushResume.pdf" download="AyushResume.pdf">
              <button className="download-btn pixel-corners">
                <div className="button-content">
                  <div className="svg-container">
                    <svg
                      className="download-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z"></path>
                    </svg>
                  </div>
                  <div className="text-container">
                    <div className="text-white font-bold">View Resume</div>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      <Box className="flex md:hidden">
        <CssBaseline />
        <AppBar
          position="fixed"
          className="py-2"
          open={open}
          style={{
            backgroundColor: "transparent",
            backdropFilter: "blur(10px)",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <div className="text-3xl font-bold text-white">
              Ayush <span className="bluegradient">Sharma</span>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
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
          <List className="flex flex-col gap-y-3">
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  scrollToSection("home");
                  handleDrawerClose();
                }}
              >
                <ListItemIcon>
                  <FaHome />
                </ListItemIcon>
                <ListItemText primary={"Home"}></ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  handleDrawerClose();
                  scrollToSection("skills");
                }}
              >
                <ListItemIcon>
                  <IoBarChart />
                </ListItemIcon>
                <ListItemText primary={"Skills"}></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  scrollToSection("projects");
                  handleDrawerClose();
                }}
              >
                <ListItemIcon>
                  <FaLaptopCode />
                </ListItemIcon>
                <ListItemText primary={"Projects"}></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  scrollToSection("contact");
                  handleDrawerClose();
                }}
              >
                <ListItemIcon>
                  <FaPhoneAlt />
                </ListItemIcon>
                <ListItemText primary={"Contact me"}></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <a href="AyushResume.pdf" download="AyushResume.pdf">
                <button className="download-btn pixel-corners ml-8">
                  <div className="button-content">
                    <div className="svg-container">
                      <svg
                        className="download-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z"></path>
                      </svg>
                    </div>
                    <div className="text-container">
                      <div className="text-white font-bold">View Resume</div>
                    </div>
                  </div>
                </button>
              </a>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </div>
    //small screen navbar
  );
};

export default Header;
