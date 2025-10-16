import { Box } from "@mui/material";
import { Masonry } from "@mui/lab";
import { Lightbox } from "yet-another-react-lightbox";
import { useState } from "react";
import { StaticImageData } from "next/image";
import "yet-another-react-lightbox/styles.css";

interface ReferenceGalleryProps {
  images: { src: StaticImageData; alt: string }[];
}

export default function ReferenceGallery({ images }: ReferenceGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Masonry columns={3} spacing={2}>
        {images.map((image, index) => (
          <Box
            key={index}
            onClick={() => openLightbox(index)}
            sx={{
              "&:hover": {
                transform: "scale(1.02)",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                cursor: "pointer",
              },
            }}
          >
            <img
              src={image.src.src}
              alt={image.alt}
              loading="lazy"
              style={{
                borderRadius: 4,
                display: "block",
                width: "100%",
              }}
            />
          </Box>
        ))}
      </Masonry>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={images.map((image, index) => ({
          src: image.src.src,
          alt: image.alt + index,
          width: image.src.width,
          height: image.src.height,
        }))}
      />
    </>
  );
}
