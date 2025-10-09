import { useState } from "react";
import { Container, Box } from "@mui/material";
import Image from "next/image";
import { humenneImages } from "./reference-images";
import Layout from "../components/layout/Layout";
import TitleDescriptionSection from "../components/common/TitleDescriptionSection";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry from "@mui/lab/Masonry";

export default function Referencie() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const heights = [
    150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
  ];

  return (
    <Layout>
      <TitleDescriptionSection
        title="Referencie"
        description="Prezrite si výber realizovaných projektov."
      />
      <Container sx={{ py: 4 }}>
        {/* CSS Grid Masonry Layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 2,
            gridAutoRows: "10px",
          }}
        >
          {humenneImages.map((image, index) => {
            // Calculate aspect ratio from Next.js Image import
            const aspectRatio = image.src.width / image.src.height;
            const height = 250 / aspectRatio;
            const span = Math.ceil(height / 10);

            return (
              <Box
                key={index}
                onClick={() => openLightbox(index)}
                sx={{
                  gridRowEnd: `span ${span}`,
                  overflow: "hidden",
                  borderRadius: 2,
                  cursor: "pointer",
                  position: "relative",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{
                    objectFit: "cover",
                  }}
                  placeholder="blur"
                  quality={85}
                />
              </Box>
            );
          })}
        </Box>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={photoIndex}
          slides={humenneImages.map((image, index) => ({
            src: image.src.src,
            alt: image.alt + index,
            width: image.src.width,
            height: image.src.height,
          }))}
        />
      </Container>
    </Layout>
  );
}
