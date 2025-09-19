import Layout from "../components/layout/Layout";
import TitleDescriptionSection from "../components/common/TitleDescriptionSection";
import { Grid, Container, Typography } from "@mui/material";
import Image from "next/image";
import centralPointHumenne from "../src/images/humenne/humenne.jpeg";

function Referencie() {
  return (
    <Layout>
      <TitleDescriptionSection
        title="Referencie"
        description="Prezrite si výber realizovaných projektov."
      />

      <Container>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4">Rezidencia Albelli</Typography>

            <Typography variant="h4">Central Point Humenné</Typography>
            <Image src={centralPointHumenne} alt="Central Point Humenné" />

            <Typography variant="h4">Koliba Gardens Bratislava</Typography>

            <Typography variant="h4">Halíč, Galicia Nueva</Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Referencie;
