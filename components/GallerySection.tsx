// import { useState } from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
// import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Lightbox } from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { useState } from "react";

interface GallerySection {
  title: string;
  images: {
    src: StaticImageData;
    alt: string;
  }[];
}

const GallerySection: React.FC<GallerySection> = ({
  title,
  images,
}: GallerySection) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleImageClick = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  return (
    <>
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
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
                  {title}
                </Typography>
              </Paper>
            </Grid>
            {/* Image grid */}
            {images.map((image, imageIndex) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={imageIndex}>
                <Paper
                  sx={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow:
                      "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-1px)",
                      boxShadow: 4,
                    },
                  }}
                  onClick={() => handleImageClick(imageIndex)}
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
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={images.map((image) => ({ src: image.src.src, alt: image.alt }))}
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

export default GallerySection;
