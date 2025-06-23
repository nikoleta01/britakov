import { Box, Container, Typography, Grid, Card } from "@mui/material";
import Layout from "../components/layout/Layout";
import { NextPage } from "next";
import Map from "../components/Map";
import ContactInfo from "../components/Landing/ContactInfo";

const ContactPage: NextPage = () => {
  return (
    <Layout>
      {/* Hero section */}
      <Box
        sx={{
          bgcolor: "secondary.main",
          color: "white",
          pt: 8,
          pb: 6,
          position: "relative",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Kontaktujte nás
          </Typography>
          <Typography variant="h6" component="p" sx={{ maxWidth: 800 }}>
            Máte otázky? Potrebujete cenovú ponuku? Kontaktujte nás telefonicky
            alebo emailom.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#f5f5f5", width: "100%" }}>
        <Container sx={{ py: 8 }}>
          <Grid container spacing={6}>
            {/* Contact Information */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 700, color: "primary.main", mb: 4 }}
              >
                Kontaktné informácie
              </Typography>

              <Card
                sx={{ mb: 4, bgcolor: "white", borderRadius: "24px", p: 4 }}
              >
                <ContactInfo />
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 700, color: "primary.main", mb: 4 }}
              >
                Nájdite nás
              </Typography>

              <Map />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default ContactPage;
