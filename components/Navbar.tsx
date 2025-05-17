import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Úvod", href: "/" },
  { label: "Produkty", href: "/produkty" },
  { label: "Kontakt", href: "/kontakt" },
];

const Navbar: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return router.pathname === path;
    }
    return router.pathname.startsWith(path);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#fff", boxShadow: 2 }}>
      <Container>
        <Toolbar disableGutters>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                position: "relative",
                width: 150,
                height: 50,
              }}
            >
              <Image
                src="/images/logo.svg"
                alt="BRITAKOV Logo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </Box>
          </Link>

          {isMobile && (
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Logo on left */}
              <Link href="/" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                    position: "relative",
                    width: 120,
                    height: 40,
                  }}
                >
                  <Image
                    src="/images/logo.svg"
                    alt="BRITAKOV Logo"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </Box>
              </Link>

              {/* Menu on right */}
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="primary"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {navItems.map((item) => (
                    <Link key={item.label} href={item.href}>
                      <MenuItem
                        onClick={handleCloseNavMenu}
                        sx={{
                          color: isActive(item.href) ? "#fff" : "inherit",
                        }}
                      >
                        <Typography textAlign="center">{item.label}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>
            </Box>
          )}

          {/* Desktop menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: isActive(item.href)
                      ? "primary.main"
                      : "secondary.main",
                    display: "block",
                    backgroundColor: "transparent",
                    fontWeight: 600,
                    mx: 1,
                    "&:hover": {
                      color: "primary.light",
                    },
                    "&:active": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
