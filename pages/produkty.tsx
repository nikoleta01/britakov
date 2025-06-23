import { Box, Container, Typography, Grid, Card, Button } from "@mui/material";
import Layout from "../components/layout/Layout";
import { NextPage } from "next";
import router from "next/router";
import Offer from "../components/Offer";

interface ProductCategory {
  id: string;
  title: string;
  image: string;
  description: string;
  redirectTo: string;
  actionButtonText: string;
}

const productCategories: ProductCategory[] = [
  {
    id: "pletiva",
    title: "KOVOVÝROBA",
    image: "/images/pletiva.jpg",
    redirectTo: "/produkty/pletiva",
    actionButtonText: "Katalóg",
    description:
      "Kvalitné materiály, profesionálne nástroje a príslušenstvo, a pozornosť venovaná každému detailu.",
  },
  {
    id: "interier",
    title: "HUTNÍCKY MATERIÁL",
    image: "/images/interier.jpg",
    redirectTo: "/produkty/interier",
    actionButtonText: "Galéria",
    description:
      "Naši odborníci sú profesionáli s priemerne 10-ročnými skúsenosťami v odbore.",
  },
  {
    id: "exterier",
    title: "SPOJOVACÍ MATERIÁL",
    image: "/images/exterier.jpg",
    redirectTo: "/produkty/exterier",
    actionButtonText: "Galéria",
    description:
      "Nemusíte platiť najviac, aby ste dostali kvalitnú prácu. Pre každý projekt vytvárame prispôsobený plán.",
  },
];

const Products: NextPage = () => {
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
            Naše Produkty
          </Typography>
          <Typography variant="h6" component="p" sx={{ maxWidth: 800 }}>
            Ponúkame široký sortiment výrobkov z kovu. V ponuke sú výrobky z
            fotogalérie, ďalších vzorov a návrhov z katalógov a prospektov,
            alebo podľa vlastnej predlohy zákazníka.
          </Typography>
        </Container>
      </Box>

      {/* Product tabs */}
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {productCategories.map((category, index) => (
            <Grid size={{ xs: 12, sm: 4 }} key={index}>
              <Card
                sx={{
                  height: 300,
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: 1,
                  position: "relative",
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
                onClick={() => {
                  router.push(category.redirectTo);
                }}
              >
                {/* Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0,0,0,0.45)",
                    zIndex: 0,
                  }}
                />
                {/* Text */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    p: 3,
                    width: "100%",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    height: "100%",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {category.description}
                  </Typography>
                  <Button
                    variant="text"
                    color="inherit"
                    endIcon={
                      <span style={{ fontSize: 18, fontWeight: "bold" }}>
                        &#8594;
                      </span>
                    }
                    sx={{
                      borderRadius: "24px",
                      fontWeight: 500,
                      textTransform: "none",
                      px: 0,
                      py: 0,
                      minWidth: 0,
                      fontSize: "1rem",
                      color: "white",
                      alignSelf: "flex-start",
                    }}
                  >
                    {category.actionButtonText}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Ponuka Section */}
      <Box
        sx={{
          bgcolor: "#f5f5f5",
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 4 },
          mt: 8,
        }}
      >
        <Container>
          <Typography
            variant="h2"
            component="h2"
            sx={{ fontWeight: 700, mb: 2, color: "text.primary" }}
          >
            Ponuka
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{ mb: 4, color: "text.secondary", fontWeight: 400 }}
          >
            Umelecko-remeselné kováčstvo Britakov Vám ponúka
          </Typography>
          <Offer />
        </Container>
      </Box>
    </Layout>
  );
};

export default Products;
