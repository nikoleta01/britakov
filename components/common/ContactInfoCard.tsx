import {
  Box,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

interface ContactInfoCardProps {
  title: string;
  location: string;
  phone: string;
}

export default function ContactInfoCard({
  title,
  location,
  phone,
}: ContactInfoCardProps) {
  return (
    <Card sx={{ mb: 4, borderRadius: "24px", p: 4 }}>
      <Box>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          {title}
        </Typography>

        <List sx={{ pt: 2 }}>
          <ListItem sx={{ px: 0, py: 1 }}>
            <ListItemIcon sx={{ color: "primary.main", minWidth: 36 }}>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary={location} />
          </ListItem>

          <ListItem sx={{ px: 0, py: 1 }}>
            <ListItemIcon sx={{ color: "primary.main", minWidth: 36 }}>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary={phone} />
          </ListItem>

          <ListItem sx={{ px: 0, py: 1 }}>
            <ListItemIcon sx={{ color: "primary.main", minWidth: 36 }}>
              <WatchLaterIcon />
            </ListItemIcon>
            <ListItemText primary="Pondelok - Piatok: 7:00-16:00" />
          </ListItem>
        </List>
      </Box>
    </Card>
  );
}
