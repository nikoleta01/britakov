import { Container, Typography, Grid } from "@mui/material";
import Layout from "../components/layout/Layout";
import { NextPage } from "next";
import Map from "../components/Map";
import TitleDescriptionSection from "../components/common/TitleDescriptionSection";
import ContactInfoCard from "../components/common/ContactInfoCard";

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <TitleDescriptionSection
        title="Kontaktujte nás"
        description="Máte otázky? Potrebujete cenovú ponuku? Kontaktujte nás telefonicky alebo emailom."
      />

      <Container sx={{ my: 4 }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700, color: "primary.main", mb: 4 }}
            >
              Kontaktné informácie
            </Typography>

            <ContactInfoCard
              title="Predajňa hutného materiálu"
              location="Strelnica 6, 048 01 Rožňava"
              phone="+421 910 702 704"
            />
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

            <Map src="https://www.google.com/maps?q=Strelnica+241%2F6%2C+Ro%C5%BE%C5%88avsk%C3%A1+Ba%C5%88a%2C+048+01+Ro%C5%BE%C5%88ava&output=embed" />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ContactPage;
