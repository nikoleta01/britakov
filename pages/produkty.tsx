import {
  Container,
  Typography,
  Card,
  Grid,
  Chip,
  CardContent,
  Box,
} from "@mui/material";
import Layout from "../components/layout/Layout";
import { NextPage } from "next";
import TitleDescriptionSection from "../components/common/TitleDescriptionSection";
import router from "next/router";

const Products: NextPage = () => {
  return (
    <Layout>
      {/* Hero section */}
      <TitleDescriptionSection
        title="Naše Produkty"
        description="Ponúkame široký sortiment výrobkov z kovu. V ponuke sú výrobky z fotogalérie, ďalších vzorov a návrhov z katalógov a prospektov, alebo podľa vlastnej predlohy zákazníka."
        showBackButton={true}
        backButtonText="Späť"
        backButtonHref="/"
      />

      <Container sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
          Kovovýroba
        </Typography>

        <Grid container spacing={3} my={4}>
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <Card
              sx={{ borderRadius: 6, cursor: "pointer" }}
              onClick={() => {
                router.push("/produkty/kovovyroba?tab=0");
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" mb={2}>
                  Brány
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  <Chip label="Moderné brány" variant="outlined" />
                  <Chip label="Kované brány" variant="outlined" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <Card sx={{ borderRadius: 6 }}>
              <CardContent>
                <Typography variant="h5" component="h2" mb={2}>
                  Zábradlia
                </Typography>
                <Chip label="Interiér" />
                <Chip label="Exteriér" />
                <Chip label="Nerez/Sklo" />
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <Card sx={{ borderRadius: 6 }}>
              <CardContent>
                <Typography variant="h5" component="h2" mb={2}>
                  Oceľové konštrukcie
                </Typography>
                <Chip label="Prístrešky" />
                <Chip label="Schodiská" />
                <Chip label="Technické konštrukcie" />
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <Card sx={{ borderRadius: 6 }}>
              <CardContent>
                <Typography variant="h5" component="h2" mb={2}>
                  Doplnky
                </Typography>
                <Chip label="Krbové súpravy" />
                <Chip label="Ozdobné závesy" />
                <Chip label="Kovaný nábytok" />
                <Chip label="Grilovacie pomôcky" />
                <Chip label="Ostatné doplnky" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
          Hutnícky materiál
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <Card sx={{ borderRadius: 6 }}>
              <CardContent>
                <Typography variant="h5" component="h2" mb={2}>
                  Príslušenstvo
                </Typography>
                <Chip label="Pletivá" />
                <Chip label="Spojovací a kotevný materiál" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Products;
