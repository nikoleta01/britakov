import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";

import router from "next/router";

interface ProductCategory {
  title: string;
  description: string;
  image: string;
  redirectTo: string;
}

const productCategories: ProductCategory[] = [
  {
    title: "Pletivá",
    description:
      "Široký výber pletív pre ploty, záhrady a bezpečnostné účely. Od klasických až po moderné dizajny, všetko v najvyššej kvalite.",
    image: "/images/pletiva.jpg",
    redirectTo: "/produkty/pletiva",
  },
  {
    title: "Interiér",
    description:
      "Elegantné kovové prvky pre váš domov. Od zábradlí a schodísk až po dekoratívne prvky, ktoré dodajú vášmu interiéru šarm.",
    image: "/images/interier.jpg",
    redirectTo: "/produkty/interier",
  },
  {
    title: "Exteriér",
    description:
      "Trvanlivé kovové výrobky pre exteriér. Ploty, brány, zábradlia a ďalšie prvky, ktoré vydržia všetky poveternostné podmienky.",
    image: "/images/exterier.jpg",
    redirectTo: "/produkty/exterier",
  },
  {
    title: "Garážové brány",
    description:
      "Moderné garážové brány s automatickým ovládaním. Bezpečné, spoľahlivé a estetické riešenia pre váš domov.",
    image: "/images/garaz.jpg",
    redirectTo: "/produkty/garaz",
  },
  {
    title: "Hutnícky materiál",
    description:
      "Kvalitný hutnícky materiál pre vaše projekty. Široký sortiment ocele a kovov v rôznych rozmeroch a profiloch.",
    image: "/images/ocel.jpg",
    redirectTo: "/produkty/hutnicky-material",
  },
  {
    title: "Nerez/Sklo",
    description:
      "Elegantné kombinácie nerezu a skla. Moderné riešenia pre interiérové aj exteriérové použitie s dôrazom na dizajn.",
    image: "/images/sklo.jpg",
    redirectTo: "/produkty/nerez-sklo",
  },
  {
    title: "Oceľové konštrukcie",
    description:
      "Profesionálne oceľové konštrukcie pre priemyselné aj komerčné účely. Spoľahlivé a bezpečné riešenia na mieru.",
    image: "/images/konstrukcie.jpg",
    redirectTo: "/produkty/ocele-konstrukcie",
  },
];

function ProductsSection() {
  return (
    <Box
      id="produkty"
      sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}
    >
      <Container>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: "bold" }}
        >
          Naše <span style={{ color: "#ffc107" }}>Produkty</span>
        </Typography>

        <Grid container spacing={4}>
          {productCategories.map((category, index) => (
            <Grid size={{ xs: 12, md: 4, lg: 3 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow:
                    "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                    cursor: "pointer",
                  },
                }}
                onClick={() => {
                  router.push(category.redirectTo);
                }}
              >
                <CardMedia
                  component="img"
                  image={category.image}
                  alt={category.title}
                  sx={{
                    height: 180,
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 500, mb: 1 }}
                  >
                    {category.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {category.description}
                  </Typography>
                  <Box sx={{ mt: "auto" }}>
                    <Button
                      variant="text"
                      color="primary"
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
                      }}
                    >
                      Viac
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Link href="/produkty">
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              sx={{ borderRadius: "24px" }}
            >
              Zobraziť všetky produkty
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default ProductsSection;
