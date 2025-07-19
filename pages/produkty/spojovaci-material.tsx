import Layout from "../../components/layout/Layout";
import TitleDescriptionSection from "../../components/common/TitleDescriptionSection";
import { Container, Grid, Typography } from "@mui/material";
import spojovaciMaterial from "../../src/images/predajna spojovaci material.png";
import Image from "next/image";
import ContactInfoCard from "../../components/common/ContactInfoCard";

function Exterier() {
  return (
    <Layout>
      <TitleDescriptionSection
        title="Spojovací materiál"
        description="Vyberte si zo širokej škály spojovacích materiálov. V ponuke sú výrobky z fotogalérie a návrhy z katalógov."
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
              title="Predajňa spojovacieho materiálu"
              location="Šafárikova 112, 048 01 Rožňava"
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
            <Image
              src={spojovaciMaterial}
              alt="Spojovací materiál"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "24px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Exterier;
