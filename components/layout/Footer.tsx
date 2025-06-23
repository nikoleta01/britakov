import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Link as MuiLink,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "secondary.main", color: "#fff", mt: "auto", py: 6 }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 2, color: "primary.main" }}
            >
              BRITAKOV
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Umelecko – remeselné kováčstvo
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">
                Lipová 13, 04941 Krásnohorské Podhradie
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, ml: 4 }}>
              Prevádzka: Strelnica 6, 04801 Rožňava
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 2, color: "primary.main" }}
            >
              Kontakt
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">Konateľ: +421 902 322 787</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">
                Ekonomické oddelenie: +421 948 779 790
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">
                Predajňa hutného materiálu: +421 910 702 704
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">britakov@britakov.sk</Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 2, color: "primary.main" }}
            >
              Navigácia
            </Typography>
            <Link href="/" legacyBehavior>
              <MuiLink
                underline="hover"
                sx={{ display: "block", mb: 1, color: "#fff" }}
                component="a"
              >
                Úvod
              </MuiLink>
            </Link>
            <Link href="/produkty" legacyBehavior>
              <MuiLink
                underline="hover"
                sx={{ display: "block", mb: 1, color: "#fff" }}
                component="a"
              >
                Produkty
              </MuiLink>
            </Link>
            <Link href="/kontakt" legacyBehavior>
              <MuiLink
                underline="hover"
                sx={{ display: "block", mb: 1, color: "#fff" }}
                component="a"
              >
                Kontakt
              </MuiLink>
            </Link>
            <Box sx={{ mt: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 2, color: "primary.main" }}
              >
                Sledujte nás
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  component="a"
                  href="https://www.instagram.com/britakov"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#fff" }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.facebook.com/britakov"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#fff" }}
                >
                  <FacebookIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.2)" }} />

        <Typography variant="body2" align="center" sx={{ pt: 2 }}>
          © {new Date().getFullYear()} Britakov. Všetky práva vyhradené.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
