import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import pletiva from "../../src/images/products/pletiva.jpg";
import zabradlie from "../../src/images/products/zabradlie.jpg";
import spojovaci from "../../src/images/products/spojovaci.jpg";
import ProductCard from "../ProductCard";
import Link from "next/link";

interface ProductCategory {
  title: string;
  description: string;
  image: StaticImageData;
  redirectTo: string;
  subcategories?: string[];
}

const productCategories: ProductCategory[] = [
  {
    title: "Kovovýroba",
    description:
      "Široký výber zábradlí, brán, oceľových konštrukcií a rôznych doplnkov. Od klasických až po moderné dizajny, všetko v najvyššej kvalite.",
    image: zabradlie,
    redirectTo: "/produkty/kovovyroba",
    subcategories: [
      "Brány",
      "Zábradlia",
      "Mreže",
      "Oceľové konštrukcie",
      "Doplnky",
    ],
  },
  {
    title: "Hutnícky materiál",
    description:
      "Elegantné kovové prvky pre váš domov. Od zábradlí a schodísk až po dekoratívne prvky, ktoré dodajú vášmu interiéru šarm.",
    image: pletiva,
    redirectTo: "/produkty/interier",
    subcategories: ["Pletivá", "Kotevný materiál"],
  },
  {
    title: "Spojovací materiál",
    description:
      "Trvanlivé kovové výrobky pre exteriér. Ploty, brány, zábradlia a ďalšie prvky, ktoré vydržia všetky poveternostné podmienky.",
    image: spojovaci,
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
