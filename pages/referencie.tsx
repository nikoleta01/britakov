import { Container, Typography } from "@mui/material";
import { humenneImages } from "./reference-images";
import Layout from "../components/layout/Layout";
import TitleDescriptionSection from "../components/common/TitleDescriptionSection";
import ReferenceGallery from "../components/ReferenceGallery";

export default function Referencie() {
  return (
    <Layout>
      <TitleDescriptionSection
        title="Referencie"
        description="Prezrite si výber realizovaných projektov."
      />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
          Central Point Humenné
        </Typography>
        <ReferenceGallery images={humenneImages} />
      </Container>
    </Layout>
  );
}
