import Layout from "../components/layout/Layout";
import ImageCarousel from "../components/carousel/ImageCarousel";
import AboutSection from "../components/landing/AboutSection";
import ProductsSection from "../components/landing/ProductsSection";
import ContactSection from "../components/landing/ContactSection";
import ScrollToTop from "../components/ScrollToTop";

interface CarouselImage {
  src: string;
  alt: string;
  subtitle: string;
  description: string;
  buttons?: {
    text: string;
    link: string;
  }[];
}

const carouselImages: CarouselImage[] = [
  {
    src: "/images/britakov7.jpg",
    alt: "Britakov Kováčstvo",
    subtitle: "TRADÍCIA A KVALITA",
    description:
      "Tradičné postupy a moderný dizajn vytvárajú dokonalú harmóniu. Zachovávame tradičné postupy ručného kovania v ohni a dôraz kladieme na precízne prevedenie každého detailu.",
    buttons: [
      {
        text: "Naše produkty",
        link: "#produkty",
      },
    ],
  },
  {
    src: "/images/britakov5.jpg",
    alt: "Britakov Kováčstvo",
    subtitle: "PRECÍZNE SPRACOVANIE",
    description:
      "Každý detail našich výrobkov je spracovaný s najvyššou precíznosťou a dôrazom na kvalitu.",
    buttons: [
      {
        text: "Naše produkty",
        link: "#produkty",
      },
    ],
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
      },
    ],
  },
];

const Home = () => {
  return (
    <Layout>
      <ImageCarousel images={carouselImages} />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <ScrollToTop />
    </Layout>
  );
};

export default Home;
