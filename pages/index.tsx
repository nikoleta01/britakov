import { Container, Typography, Grid } from "@mui/material";
import Layout from "../components/Layout";
import { NextPage } from "next";
import ImageCarousel from "../components/ImageCarousel";
import AboutSection from "../components/Landing/AboutSection";
import Map from "../components/Map";
import ContactInfo from "../components/Landing/ContactInfo";
import ProductsSection from "../components/Landing/ProductsSection";

interface CarouselImage {
  src: string;
  alt: string;
  subtitle: string;
  description: string;
  buttons?: {
    text: string;
    link: string;
    variant: "contained" | "outlined";
    color: "primary" | "secondary";
  }[];
}

const carouselImages: CarouselImage[] = [
  {
    src: "/images/britakov7.jpg",
    alt: "Britakov Kováčstvo",
    subtitle: "TRADÍCIA A KVALITA",
    description:
      "Tradičné postupy a moderný dizajn vytvárajú dokonalú harmóniu. Zachovávame tradičné postupy ručného kovania v ohni a dôraz kladieme na precízne prevedenie každého detailu.",
    buttons: [],
  },
  {
    src: "/images/britakov5.jpg",
    alt: "Britakov Kováčstvo",
    subtitle: "PRECÍZNE SPRACOVANIE",
    description:
      "Každý detail našich výrobkov je spracovaný s najvyššou precíznosťou a dôrazom na kvalitu.",
    buttons: [],
  },
  {
    src: "/images/britakov8.jpg",
    alt: "Britakov Kováčstvo",
    subtitle: "NA MIERU PRE VÁS",
    description: "Pozrite si našu širokú ponuku produktov a služieb.",
    buttons: [
      {
        text: "Naše produkty",
        link: "#produkty",
        variant: "contained",
        color: "primary",
      },
    ],
  },
];

const Home: NextPage = () => {
  return (
    <Layout>
      {/* Hero Carousel Section */}
      <ImageCarousel images={carouselImages} />

      <AboutSection />

      <ProductsSection />

      <Container sx={{ my: 6 }}>
        <Grid container>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700, color: "primary.main", mb: 4 }}
            >
              Kontaktné informácie
            </Typography>
            <ContactInfo />
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700, color: "primary.main", mb: 4 }}
            >
              Nájdete nás
            </Typography>
            <Map />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
