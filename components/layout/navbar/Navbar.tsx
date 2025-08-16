import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  useMediaQuery,
  useTheme,
  Divider,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

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
          {/* Desktop Logo */}
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

          {/* Mobile Layout */}
          {isMobile && (
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Mobile Logo */}
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

              {/* Mobile Menu Component */}
              <MobileMenu
                navItems={navItems}
                anchorElNav={anchorElNav}
                handleOpenNavMenu={handleOpenNavMenu}
                handleCloseNavMenu={handleCloseNavMenu}
              />
            </Box>
          )}

          {/* Desktop Menu */}
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
                      {/* View All Products option */}
                      <Link href={item.href}>
                        <MenuItem
                          onClick={handleCloseDropdown}
                          sx={{
                            color: isActive(item.href)
                              ? "primary.main"
                              : "text.primary",
                            borderBottom: "1px solid",
                            borderColor: "divider",
                            fontWeight: 600,
                            "&:hover": {
                              backgroundColor: "action.hover",
                              color: "primary.light",
                            },
                          }}
                        >
                          <Typography>Všetky produkty</Typography>
                        </MenuItem>
                      </Link>
                      <Divider />
                      {item.subcategories.map((subcategory) => (
                        <Link key={subcategory.label} href={subcategory.href}>
                          <MenuItem
                            onClick={handleCloseDropdown}
                            sx={{
                              pl: 3,
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

            {/* Desktop Social Icons */}
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
