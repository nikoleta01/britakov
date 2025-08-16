import React from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

interface NavItem {
  label: string;
  href: string;
  subcategories?: { label: string; href: string; subcategories?: string[] }[];
}

interface MobileMenuProps {
  navItems: NavItem[];
  anchorElNav: HTMLElement | null;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  navItems,
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
}) => {
  const router = useRouter();

  const isActive = (path: string) => {
    if (path === "/") {
      return router.pathname === path;
    }
    return router.pathname.startsWith(path);
  };

  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-controls="mobile-menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        sx={{ color: "text.primary" }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="mobile-menu-appbar"
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
                  color: isActive(item.href) ? "primary.main" : "text.primary",
                }}
              >
                <Typography textAlign="center">{item.label}</Typography>
              </MenuItem>
            </Link>
            {item.subcategories && (
              <Box>
                <Divider color="rgba(255, 255, 255, 0.65)" />
                {item.subcategories.map((subcategory) => (
                  <Link key={subcategory.label} href={subcategory.href}>
                    <MenuItem
                      onClick={handleCloseNavMenu}
                      sx={{
                        pl: 4,
                        color: isActive(subcategory.href)
                          ? "primary.main"
                          : "text.primary",
                        fontSize: "0.875rem",
                      }}
                    >
                      <Typography textAlign="center">
                        {subcategory.label}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Box>
            )}
          </Box>
        ))}
        <Divider color="rgba(255, 255, 255, 0.65)" />

        <MenuItem sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            component="a"
            href="https://www.instagram.com/britakov/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              padding: 0,
            }}
          >
            <InstagramIcon sx={{ color: "text.primary", mr: 1 }} />
            <Typography sx={{ color: "text.primary" }}>Instagram</Typography>
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton
            component="a"
            href="https://www.facebook.com/britakov"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              padding: 0,
            }}
          >
            <FacebookIcon sx={{ color: "text.primary", mr: 1 }} />
            <Typography sx={{ color: "text.primary" }}>Facebook</Typography>
          </IconButton>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MobileMenu;
