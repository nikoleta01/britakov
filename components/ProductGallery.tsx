import { useState } from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface GallerySection {
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
}

interface ProductGalleryProps {
  sections: GallerySection[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  sections,
}: ProductGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleImageClick = (sectionIndex: number, imageIndex: number) => {
    setCurrentSection(sectionIndex);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  return (
    <>
      {sections.map((section, sectionIndex) => (
        <Box
          key={sectionIndex}
          sx={{
            width: "100%",
            bgcolor: sectionIndex % 2 === 0 ? "white" : "grey.100",
            py: 6,
          }}
        >
          <Container>
            <Grid container spacing={2}>
              {/* Title card - positioned based on section index */}
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                sx={{
                  order: { xs: 1, md: sectionIndex % 2 === 0 ? 1 : 4 },
                }}
              >
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: "24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "primary.main",
                    boxShadow:
                      "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
                    minHeight: 200,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "white", textAlign: "center" }}
                  >
                    {section.title}
                  </Typography>
                </Paper>
              </Grid>
              {/* Image grid */}
              {section.images.map((image, imageIndex) => (
                <Grid
                  size={{ xs: 12, sm: 6, md: 3 }}
                  key={imageIndex}
                  sx={{
                    order: {
                      xs: 2,
                      md:
                        sectionIndex % 2 === 0
                          ? imageIndex + 2
                          : imageIndex + 1,
                    },
                  }}
                >
                  <Paper
                    sx={{
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow:
                        "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
                      cursor: "pointer",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: 4,
                      },
                    }}
                    onClick={() => handleImageClick(sectionIndex, imageIndex)}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: 200,
                        width: "100%",
                      }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      ))}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={sections[currentSection].images}
        index={currentImageIndex}
        plugins={[Thumbnails]}
        thumbnails={{
          width: 120,
          height: 80,
          padding: 4,
          border: 2,
          borderRadius: 4,
          gap: 8,
        }}
      />
    </>
  );
};

export default ProductGallery;
