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
    title: "Kovovýroba",
    description:
      "Široký výber pletív pre ploty, záhrady a bezpečnostné účely. Od klasických až po moderné dizajny, všetko v najvyššej kvalite.",
    image: "/images/pletiva.jpg",
    redirectTo: "/produkty/pletiva",
  },
  {
    title: "Hutnícky materiál",
    description:
      "Elegantné kovové prvky pre váš domov. Od zábradlí a schodísk až po dekoratívne prvky, ktoré dodajú vášmu interiéru šarm.",
    image: "/images/interier.jpg",
    redirectTo: "/produkty/interier",
  },
  {
    title: "Spojovací materiál",
    description:
      "Trvanlivé kovové výrobky pre exteriér. Ploty, brány, zábradlia a ďalšie prvky, ktoré vydržia všetky poveternostné podmienky.",
    image: "/images/exterier.jpg",
    redirectTo: "/produkty/exterier",
  },
];

function ProductsSection() {
  return (
    <Container id="produkty" sx={{ mt: 6 }}>
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

      <Box my={6} sx={{ textAlign: "center" }}>
        <Link href="/produkty">
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: "text.primary",
              borderRadius: "24px",
              "&:hover": {
                transform: "translateY(-2px)",
                transition: "transform 0.2s",
              },
            }}
          >
            Zobraziť všetky produkty
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default ProductsSection;
