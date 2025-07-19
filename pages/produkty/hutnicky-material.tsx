import Layout from "../../components/layout/Layout";
import TitleDescriptionSection from "../../components/common/TitleDescriptionSection";
import ProductGallery from "../../components/ProductGallery";
import { Container, Box, Tabs, Tab, Typography } from "@mui/material";
import TabPanel from "../../components/TabPanel";
import { useState } from "react";
import pletivo from "../../src/images/products/pletiva.jpg";

const gallerySections = [
  {
    title: "Pletivá",
    images: [
      {
        src: pletivo.src,
        alt: "Pletivo 1",
      },
      {
        src: pletivo.src,
        alt: "Pletivo 2",
      },
      {
        src: pletivo.src,
        alt: "Pletivo 3",
      },
    ],
  },
];

function Interier() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <TitleDescriptionSection
        title="Hutnícky materiál"
        description="Vyberte si zo širokej škály interiérových výrobkov. V ponuke sú výrobky z fotogalérie a návrhy z katalógov."
      />
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Tabs value={value} onChange={handleChange} sx={{ mb: 3 }}>
            <Tab label="Pletivá" />
            <Tab label="Spojovací a kotevný materiál" />
          </Tabs>

          <TabPanel value={value} index={0}>
            <ProductGallery sections={gallerySections} />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Typography variant="h5">Spojovací a kotevný materiál</Typography>
          </TabPanel>
        </Box>
      </Container>
    </Layout>
  );
}

export default Interier;
