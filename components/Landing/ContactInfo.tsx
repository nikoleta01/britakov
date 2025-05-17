import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactInfo() {
  return (
    <Box
      sx={{
        bgcolor: "white",
        color: "black",
        px: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        {/* Left: Text */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ bgcolor: "white" }}>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              BRITAKOV
            </Typography>
            <Typography variant="body2" gutterBottom>
              Umelecko – remeselné kováčstvo
            </Typography>

            <List sx={{ pt: 2 }}>
              <ListItem sx={{ px: 0, py: 1 }}>
                <ListItemIcon sx={{ color: "primary.main", minWidth: 36 }}>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Adresa"
                  secondary="Lipová 13, 04941 Krásnohorské Podhradie"
                />
              </ListItem>

              <ListItem sx={{ px: 0, py: 1 }}>
                <ListItemIcon sx={{ color: "primary.main", minWidth: 36 }}>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Prevádzka"
                  secondary="Strelnica 6, 04801 Rožňava"
                />
              </ListItem>

              <Divider sx={{ my: 1 }} />

              <ListItem sx={{ px: 0, py: 1 }}>
                <ListItemIcon sx={{ color: "primary.main", minWidth: 36 }}>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Konateľ - Ondrej Hatvanský"
                  secondary="+421 902 322 787"
                />
              </ListItem>

              <ListItem sx={{ px: 0, py: 1 }}>
                <ListItemIcon sx={{ color: "primary.main", minWidth: 36 }}>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Ekonomické oddelenie"
                  secondary="+421 948 779 790"
                />
              </ListItem>

              <ListItem sx={{ px: 0, py: 1 }}>
                <ListItemIcon sx={{ color: "primary.main", minWidth: 36 }}>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Predajňa hutného materiálu"
                  secondary="+421 910 702 704"
                />
              </ListItem>

              <Divider sx={{ my: 1 }} />

              <ListItem sx={{ px: 0, py: 1 }}>
                <ListItemIcon sx={{ color: "primary.main", minWidth: 36 }}>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText
                  primary="E-mail"
                  secondary="britakov@britakov.sk"
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
