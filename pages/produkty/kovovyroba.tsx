import { Container, Tab, Tabs, Typography, Box } from "@mui/material";
import Layout from "../../components/layout/Layout";
import TitleDescriptionSection from "../../components/common/TitleDescriptionSection";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductGallery from "../../components/ProductGallery";
import TabPanel from "../../components/TabPanel";

const gallerySections = [
  {
    title: "Moderné brány",
    images: [
      {
        src: "/images/zabradlie/zabradlie1.jpg",
        alt: "Brána 1",
      },
      {
        src: "/images/interier.jpg",
        alt: "Brána 2",
      },
      {
        src: "/images/zabradlie/zabradlie1.jpg",
        alt: "Brána 1",
      },
      {
        src: "/images/interier.jpg",
        alt: "Brána 1",
      },
      {
        src: "/images/zabradlie/zabradlie3.jpg",
        alt: "Brána 1",
      },
      {
        src: "/images/zabradlie/zabradlie1.jpg",
        alt: "Brána 1",
      },
      {
        src: "/images/zabradlie/zabradlie3.jpg",
        alt: "Brána 1",
      },
    ],
  },
  {
    title: "Kované brány",
    images: [
      {
        src: "/images/interier2.jpg",
        alt: "Kovaný nábytok 1",
      },
      {
        src: "/images/postel.jpg",
        alt: "Kovaný nábytok 2",
      },
      {
        src: "/images/interier2.jpg",
        alt: "Kovaný nábytok 2",
      },
    ],
  },
];

export default function Kovovyroba() {
  const router = useRouter();
  const [value, setValue] = useState(0);

  // Handle tab navigation from URL query parameter
  useEffect(() => {
    if (router.isReady && router.query.tab) {
      const tabIndex = parseInt(router.query.tab as string, 10);
      if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex <= 4) {
        setValue(tabIndex);
      }
    }
  }, [router.isReady, router.query.tab]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <TitleDescriptionSection
        title="Kovovýroba"
        description="Vyberte si zo širokej škály kovových výrobkov. V ponuke sú výrobky z fotogalérie a návrhy z katalógov."
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
            <Tab label="Brány" />
            <Tab label="Zábradlia" />
            <Tab label="Mreže" />
            <Tab label="Oceľové konštrukcie" />
            <Tab label="Doplnky" />
          </Tabs>

          <TabPanel value={value} index={0}>
            <ProductGallery sections={gallerySections} />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Typography variant="h5">Zábradlia</Typography>
            <Typography>Obsah pre zábradlia...</Typography>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Typography variant="h5">Mreže</Typography>
            <Typography>Obsah pre mreže...</Typography>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <Typography variant="h5">Oceľové konštrukcie</Typography>
            <Typography>Obsah pre oceľové konštrukcie...</Typography>
          </TabPanel>

          <TabPanel value={value} index={4}>
            <Typography variant="h5">Doplnky</Typography>
            <Typography>Obsah pre doplnky...</Typography>
          </TabPanel>
        </Box>
      </Container>
    </Layout>
  );
}
