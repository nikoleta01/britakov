import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Divider,
  Box,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  subcategories?: { label: string; href: string; subcategories?: string[] }[];
}

const navItems: NavItem[] = [
  { label: "Úvod", href: "/" },
  {
    label: "Produkty",
    href: "/produkty",
    subcategories: [
      {
        label: "Kovovýroba",
        href: "/produkty/kovovyroba",
        subcategories: [
          "Brány",
          "Zábradlia",
          "Mreže",
          "Oceľové konštrukcie",
          "Doplnky",
        ],
      },
      { label: "Hutnícky materiál", href: "/produkty/hutnicky-material" },
      { label: "Spojovací materiál", href: "/produkty/spojovaci-material" },
    ],
  },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Referencie", href: "/referencie" },
];

const Navbar: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
  const [anchorElDropdown, setAnchorElDropdown] = useState<HTMLElement | null>(
    null
  );
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenDropdown = (
    event: React.MouseEvent<HTMLElement>,
    itemLabel: string
  ) => {
    setAnchorElDropdown(event.currentTarget);
    setOpenDropdown(itemLabel);
  };

  const handleCloseDropdown = () => {
    setAnchorElDropdown(null);
    setOpenDropdown(null);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return router.pathname === path;
    }
    return router.pathname.startsWith(path);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "background.default", boxShadow: 2 }}
    >
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
                  color="inherit"
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
                    <Box key={item.label}>
                      <Link href={item.href}>
                        <MenuItem
                          onClick={handleCloseNavMenu}
                          sx={{
                            color: isActive(item.href) ? "#fff" : "inherit",
                          }}
                        >
                          <Typography textAlign="center">
                            {item.label}
                          </Typography>
                        </MenuItem>
                      </Link>
                      {item.subcategories && (
                        <Box>
                          <Divider />
                          {item.subcategories.map((subcategory) => (
                            <Link
                              key={subcategory.label}
                              href={subcategory.href}
                            >
                              <MenuItem
                                onClick={handleCloseNavMenu}
                                sx={{
                                  pl: 4,
                                  color: isActive(subcategory.href)
                                    ? "#fff"
                                    : "inherit",
                                  fontSize: "0.875rem",
                                }}
                              >
                                <Typography textAlign="center">
                                  {subcategory.label}
                                </Typography>
                              </MenuItem>
                            </Link>
                          ))}
                          <Divider />
                        </Box>
                      )}
                    </Box>
                  ))}
                  <MenuItem sx={{ display: "flex", justifyContent: "center" }}>
                    <IconButton
                      component="a"
                      href="https://www.instagram.com/britakov/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon sx={{ color: "text.primary" }} />
                    </IconButton>
                    <IconButton
                      component="a"
                      href="https://www.facebook.com/britakov"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon sx={{ color: "text.primary" }} />
                    </IconButton>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          )}

          {/* Desktop menu */}
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {navItems.map((item) => (
              <Box
                key={item.label}
                sx={{ position: "relative" }}
                onMouseLeave={handleCloseDropdown}
                // onClick={() => router.push(item.href)}
              >
                {item.subcategories ? (
                  <Box>
                    <Button
                      onMouseEnter={(e) => handleOpenDropdown(e, item.label)}
                      sx={{
                        my: 2,
                        color: isActive(item.href)
                          ? "primary.main"
                          : "text.primary",
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
                    <Menu
                      anchorEl={anchorElDropdown}
                      open={openDropdown === item.label}
                      onClose={handleCloseDropdown}
                      slotProps={{
                        paper: {
                          onMouseLeave: handleCloseDropdown,
                        },
                      }}
                      sx={{
                        "& .MuiPaper-root": {
                          backgroundColor: "background.default",
                          border: "1px solid",
                          borderColor: "divider",
                          borderRadius: "8px",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          marginTop: "4px",
                        },
                      }}
                    >
                      <Divider />
                      {item.subcategories.map((subcategory) => (
                        <Link key={subcategory.label} href={subcategory.href}>
                          <MenuItem
                            onClick={handleCloseDropdown}
                            sx={{
                              color: isActive(subcategory.href)
                                ? "primary.main"
                                : "text.primary",
                              "&:hover": {
                                backgroundColor: "action.hover",
                                color: "primary.light",
                              },
                            }}
                          >
                            <Typography>{subcategory.label}</Typography>
                          </MenuItem>
                        </Link>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Link href={item.href}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: isActive(item.href)
                          ? "primary.main"
                          : "text.primary",
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
                )}
              </Box>
            ))}
            <IconButton
              component="a"
              href="https://www.instagram.com/britakov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon
                sx={{
                  color: "text.primary",
                  "&:hover": { color: "primary.main" },
                }}
              />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.facebook.com/britakov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon
                sx={{
                  color: "text.primary",
                  "&:hover": { color: "primary.main" },
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
