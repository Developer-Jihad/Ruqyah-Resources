"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
import HealingIcon from "@mui/icons-material/Healing";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import { useThemeToggle } from "../themeContext"; // Adjust path as needed
import { useTheme, useMediaQuery } from "@mui/material";
import logo from "@/public/logo.png";

interface NavItem {
  label: string;
  path: string;
  icon: JSX.Element;
}

const drawerWidth = 200;
const navItems: NavItem[] = [
  { label: "হোম", path: "/", icon: <HomeIcon /> },
  { label: "ডকুমেন্টস", path: "/docs", icon: <DescriptionIcon /> },
  { label: "ভিডিও", path: "/videos", icon: <VideoLibraryIcon /> },
  { label: "ডায়াগনোসিস", path: "/diagnosis", icon: <HealingIcon /> },
  { label: "রাক্বী", path: "/ruqy", icon: <PermPhoneMsgIcon /> },
];

export default function UnifiedAppBar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const activeTab = pathname;
  const { toggleTheme, isDarkMode } = useThemeToggle();
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  const container = undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{ my: 2, color: isDarkMode ? "#fff" : "#333" }}
      >
        Learn Ruqyah
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label}>
            <ListItemButton
              component={Link}
              href={item.path}
              onClick={handleNavClick}
              aria-current={activeTab === item.path ? "page" : undefined}
              sx={{
                bgcolor: isDarkMode ? "#333" : "#fff",
                textAlign: "center",
                borderRadius: "5px",
                border:
                  activeTab !== item.path
                    ? theme.palette.primary.main
                    : isDarkMode
                    ? "1px solid #66BB6A"
                    : "1px solid #66BB6A",
                color:
                  activeTab === item.path
                    ? theme.palette.primary.main
                    : isDarkMode
                    ? "#fff"
                    : "#333",
                "&:hover": {
                  backgroundColor: isDarkMode ? "#555" : "#CBF5DD",
                },
              }}
            >
              <ListItemText
                sx={{
                  fontFamily: "Lexend, sans-serif",
                  "& .MuiTypography-root": {
                    fontFamily: "Lexend, sans-serif",
                    fontWeight: "bold",
                  },
                }}
                primary={item.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ maxWidth: "1200px" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          backdropFilter: "blur(20px) saturate(180%)",
          borderBottom: `2px solid ${
            isDarkMode ? "rgba(102, 187, 106, 0.2)" : "rgba(45, 80, 22, 0.15)"
          }`,
          backgroundColor: isDarkMode
            ? "rgba(15, 20, 25, 0.95)"
            : "rgba(255, 255, 255, 0.95)",
          backgroundImage: isDarkMode
            ? "linear-gradient(135deg, rgba(15, 20, 25, 0.95) 0%, rgba(26, 31, 46, 0.95) 100%)"
            : "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 250, 250, 0.95) 100%)",
          transition: "all 0.3s ease",
        }}
      >
        <Container disableGutters>
          <Toolbar>
            <Link href="/">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image src={logo} alt="Ruqyah logo" width={20} height={21} />
              </Box>
            </Link>

            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                ml: 1.5,
                fontWeight: 700,
                background: isDarkMode
                  ? "linear-gradient(135deg, #66BB6A 0%, #81C784 100%)"
                  : "linear-gradient(135deg, #2D5016 0%, #4A7C59 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <Link
                href="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                রুকইয়াহ
              </Link>
            </Typography>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.path}
                  onClick={handleNavClick}
                  aria-current={activeTab === item.path ? "page" : undefined}
                  sx={{
                    borderRadius: 1,
                    position: "relative",
                    color:
                      activeTab === item.path
                        ? theme.palette.primary.main
                        : isDarkMode
                        ? "#E8E8E8"
                        : "#2D5016",
                    fontWeight: activeTab === item.path ? 700 : 500,
                    px: 3,
                    py: 1,
                    mx: 0.5,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&::before":
                      activeTab === item.path
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "80%",
                            height: 3,
                            background: isDarkMode
                              ? "linear-gradient(90deg, #66BB6A 0%, #81C784 100%)"
                              : "linear-gradient(90deg, #2D5016 0%, #4A7C59 100%)",
                            borderRadius: "2px 2px 0 0",
                          }
                        : {},
                    "&:hover": {
                      borderRadius: 2,
                      backgroundColor: isDarkMode
                        ? "rgba(102, 187, 106, 0.15)"
                        : "rgba(45, 80, 22, 0.08)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleTheme}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon sx={{ color: "#333" }} />
              )}
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open navigation menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" }, ml: 1 }}
            >
              {isDarkMode ? <MenuIcon /> : <MenuIcon sx={{ color: "#333" }} />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backdropFilter: "blur(10px)",
              backgroundColor: isDarkMode
                ? "rgba(05, 10, 20, 0.8)"
                : "rgba(255, 255, 255, 0.8)",
              color: isDarkMode ? "#fff" : "#333",
              height: "100vh",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {isMobile && (
        <BottomNavigation
          value={activeTab}
          style={{
            padding: "35px",
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            borderTop: `1px solid ${theme.palette.divider}`,
            backgroundColor: isDarkMode
              ? "rgba(10, 20, 30, 0.8)"
              : "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            zIndex: 1000,
          }}
        >
          {navItems.map((item) => (
            <BottomNavigationAction
              key={item.label}
              label={item.label}
              value={item.path}
              icon={item.icon}
              component={Link}
              href={item.path}
              onClick={handleNavClick}
              aria-current={activeTab === item.path ? "page" : undefined}
              sx={{
                color:
                  activeTab === item.path
                    ? theme.palette.primary.main
                    : theme.palette.text.secondary,
                "& .MuiBottomNavigationAction-label": {
                  fontFamily: "'Noto Serif Bengali', sans-serif",
                  fontSize: theme.typography.button.fontSize,
                  fontWeight: theme.typography.button.fontWeight,
                  color:
                    activeTab === item.path
                      ? theme.palette.primary.main
                      : theme.palette.text.secondary,
                },
              }}
            />
          ))}
        </BottomNavigation>
      )}

      <Toolbar />
    </Box>
  );
}
