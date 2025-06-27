import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export default function ContactInfo() {
  return (
    <Box>
      <Typography
        variant="h6"
        component="h3"
        gutterBottom
        sx={{ fontWeight: 600 }}
      >
        Predajňa hutného materiálu
      </Typography>

      <List sx={{ pt: 2 }}>
        <ListItem sx={{ px: 0, py: 1 }}>
          <ListItemIcon sx={{ color: "primary.main", minWidth: 36 }}>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Strelnica 6, 04801 Rožňava" />
        </ListItem>

        <ListItem sx={{ px: 0, py: 1 }}>
          <ListItemIcon sx={{ color: "primary.main", minWidth: 36 }}>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary="+421 910 702 704" />
        </ListItem>

        <ListItem sx={{ px: 0, py: 1 }}>
          <ListItemIcon sx={{ color: "primary.main", minWidth: 36 }}>
            <WatchLaterIcon />
          </ListItemIcon>
          <ListItemText primary="Po-Pi: 7:00-16:00" />
        </ListItem>
      </List>
    </Box>
  );
}
