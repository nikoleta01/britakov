import { Container, Grid, Typography } from "@mui/material";
import ContactInfo from "./ContactInfo";
import Map from "../Map";

function ContactSection() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          //   color: "primary.main",
          fontWeight: "bold",
          mb: 4,
          textAlign: "center",
        }}
      >
        Kontakt
      </Typography>
      <Grid container>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700, color: "primary.main", mb: 4 }}
          >
            Kontaktné informácie
          </Typography>
          <ContactInfo />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700, color: "primary.main", mb: 4 }}
          >
            Nájdete nás
          </Typography>
          <Map />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactSection;
