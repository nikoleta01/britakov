import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";

import ProductCard from "../ProductCard";

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
  // {
  //   title: "Garážové brány",
  //   description:
  //     "Moderné garážové brány s automatickým ovládaním. Bezpečné, spoľahlivé a estetické riešenia pre váš domov.",
  //   image: "/images/garaz.jpg",
  //   redirectTo: "/produkty/garaz",
  // },
  // {
  //   title: "Hutnícky materiál",
  //   description:
  //     "Kvalitný hutnícky materiál pre vaše projekty. Široký sortiment ocele a kovov v rôznych rozmeroch a profiloch.",
  //   image: "/images/ocel.jpg",
  //   redirectTo: "/produkty/hutnicky-material",
  // },
  // {
  //   title: "Nerez/Sklo",
  //   description:
  //     "Elegantné kombinácie nerezu a skla. Moderné riešenia pre interiérové aj exteriérové použitie s dôrazom na dizajn.",
  //   image: "/images/sklo.jpg",
  //   redirectTo: "/produkty/nerez-sklo",
  // },
  // {
  //   title: "Oceľové konštrukcie",
  //   description:
  //     "Profesionálne oceľové konštrukcie pre priemyselné aj komerčné účely. Spoľahlivé a bezpečné riešenia na mieru.",
  //   image: "/images/konstrukcie.jpg",
  //   redirectTo: "/produkty/ocele-konstrukcie",
  // },
];

function ProductsSection() {
  return (
    <Box id="produkty" sx={{ py: 6 }}>
      <Container>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ mb: 6, fontWeight: "bold" }}
        >
          Naše{" "}
          <Typography component="span" variant="inherit" color="primary.main">
            Produkty
          </Typography>
        </Typography>

        <Grid container spacing={4}>
          {productCategories.map((category, index) => (
            <Grid size={{ xs: 12, sm: 4 }} key={index}>
              <ProductCard category={category} />
            </Grid>
          ))}
        </Grid>

        <Box mt={6} sx={{ textAlign: "center" }}>
          <Link href="/produkty">
            <Button
              variant="outlined"
              size="large"
              sx={{ color: "text.primary", borderRadius: "24px" }}
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
