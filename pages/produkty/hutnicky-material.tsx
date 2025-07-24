import Layout from "../../components/layout/Layout";
import TitleDescriptionSection from "../../components/common/TitleDescriptionSection";
import ProductGallery from "../../components/ProductGallery";
import {
  Container,
  Box,
  Tabs,
  Tab,
  Typography,
  Card,
  Grid,
} from "@mui/material";
import TabPanel from "../../components/TabPanel";
import { useState } from "react";
import pletivo from "../../src/images/products/pletiva.jpg";
import Image from "next/image";
import { downloadPDF } from "../../utils/pdfDownloader";

const meshList = [
  {
    title: "Vinohradnícke systémy",
    description:
      "Vinohradník je materiál, ktorý sa používa na výrobu vinohradníka.",
    image: pletivo.src,
    pdfFilename: "vinohradnicke-systemy.pdf",
    items: [
      "Vinohradnícke stĺpiky",
      "Vinohradnícke drôty",
      "Ochrana vinohradov - pletivá",
      "Príslušenstvo",
    ],
  },
  {
    title: "Moderné panelové oplotenie",
    description:
      "Vinohradník je materiál, ktorý sa používa na výrobu vinohradníka.",
    image: pletivo.src,
    pdfFilename: "vinohradnicke-systemy.pdf",
    items: [
      "Panely AGÁT",
      "Panely AMETYST",
      "Panely ÓNYX",
      "Panely RUBÍN",
      "Panely SMARAGD",
      "Brány TOP",
    ],
  },
];
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
            <Grid container spacing={2}>
              {meshList.map((mesh, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow:
                        "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: 6,
                        cursor: "pointer",
                      },
                    }}
                    onClick={async (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      try {
                        await downloadPDF(
                          mesh.pdfFilename,
                          `${mesh.title}.pdf`
                        );
                      } catch (error) {
                        console.error("Download failed:", error);
                      }
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: 200,
                        width: "100%",
                      }}
                    >
                      <Image
                        src={mesh.image}
                        alt={mesh.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="h6"
                        component="h2"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {mesh.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {mesh.description}
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, m: 0 }}>
                        {mesh.items.map((item, itemIndex) => (
                          <Typography
                            key={itemIndex}
                            component="li"
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 0.5 }}
                          >
                            {item}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {/* <ProductGallery sections={gallerySections} /> */}
          </TabPanel>

          <TabPanel value={value} index={1}>
            <ProductGallery sections={gallerySections} />
            {/* <Typography variant="h5">Spojovací a kotevný materiál</Typography> */}
          </TabPanel>
        </Box>
      </Container>
    </Layout>
  );
}

export default Interier;
