import "./style.css";
import { FC, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { HeaderLink } from "../../../models/header";
import { pages } from "./config";

export const Header: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { pathname } = useLocation();

  // Handling opening navigation bar on smaller resolution
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ paddingLeft: "40px", paddingRight: "40px" }}
    >
      <Container maxWidth="xl" className="header-container">
        <Toolbar disableGutters>
          {/* Hide this content on mobile resolution */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}>
            <img src={logo} className="logo" alt="logo" />
          </Box>
          {/* Display this content on smaller resolution */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ link, title }) => (
                <MenuItem key={link} onClick={handleCloseNavMenu}>
                  <Link
                    key={link}
                    to={link}
                    className={
                      link === pathname
                        ? "active header-link-sm"
                        : "header-link-sm"
                    }
                  >
                    {title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              width: "85%",
              justifyContent: "center",
            }}
          >
            <img src={logo} className="logo" alt="logo" />
          </Box>
          {/* Hide this content on smaller resolution */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ link, title }) => (
              <Link
                key={link}
                to={link}
                className={
                  link === pathname ? "active header-link" : " header-link"
                }
              >
                {title}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
