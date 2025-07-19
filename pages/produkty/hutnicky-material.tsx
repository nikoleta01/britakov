import Layout from "../../components/layout/Layout";
import TitleDescriptionSection from "../../components/common/TitleDescriptionSection";
import ProductGallery from "../../components/ProductGallery";

const gallerySections = [
  {
    title: "Zábradlie",
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
    title: "Kovaný nábytok",
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

function Interier() {
  return (
    <Layout>
      <TitleDescriptionSection
        title="Hutnícky materiál"
        description="Vyberte si zo širokej škály interiérových výrobkov. V ponuke sú výrobky z fotogalérie a návrhy z katalógov."
      />
      <ProductGallery sections={gallerySections} />
    </Layout>
  );
}

export default Interier;
