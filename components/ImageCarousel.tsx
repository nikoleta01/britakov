import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import Link from "next/link";

interface CarouselImage {
  src: string;
  alt: string;
  subtitle?: string;
  description?: string;
  buttons?: {
    text: string;
    link: string;
    variant: "contained" | "outlined";
    color: "primary" | "secondary";
  }[];
}

interface ImageCarouselProps {
  images: CarouselImage[];
  showContent?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  showContent = true,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentSlide, setCurrentSlide] = useState(2);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    swipe: true,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    arrows: false,
    pauseOnHover: true,
    touchThreshold: 10,
    touchMove: true,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: 600,
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <Box key={index} sx={{ position: "relative", height: 600 }}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                  "& img": {
                    objectFit: "cover",
                  },
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 2}
                  sizes="100vw"
                />
              </Box>
            </Box>
          ))}
        </Slider>

        {!isSmallScreen && (
          <>
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: 24,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                width: 48,
                height: 48,
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: 24,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                width: 48,
                height: 48,
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </>
        )}
      </Box>

      {showContent && images.length > 0 && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 100%)",
            zIndex: 1,
          }}
        >
          <Container
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                maxWidth: isMobile ? "100%" : "50%",
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                padding: theme.spacing(4),
              }}
            >
              <Box sx={{ mb: theme.spacing(2) }}>
                <Typography
                  variant={isMobile ? "h4" : "h2"}
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: "#fff",
                    textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
                    position: "relative",
                    paddingBottom: theme.spacing(2),
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "60px",
                      height: "3px",
                      backgroundColor:
                        theme.palette.secondary.main || "#ffc107",
                    },
                  }}
                >
                  UMELECKO-REMESELNÉ KOVÁČSTVO
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "block",
                  mb: 2,
                  minHeight: "3em",
                }}
              >
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  component="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
                  }}
                >
                  {images[currentSlide]?.subtitle || ""}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 1,
                  minHeight: "6em",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#fff",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                    mb: 1,
                  }}
                >
                  {images[currentSlide]?.description || ""}
                </Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  {images[currentSlide]?.buttons?.map((button, index) => (
                    <Link
                      key={index}
                      href={button.link}
                      passHref
                      scroll={false}
                    >
                      <Button
                        variant={button.variant}
                        color={button.color}
                        onClick={(e) => {
                          if (button.link.startsWith("#")) {
                            e.preventDefault();
                            const element = document.querySelector(button.link);
                            element?.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        sx={{
                          borderRadius: "24px",
                          px: 3,
                          py: 1,
                          mt: 2,
                          fontWeight: "bold",
                          textTransform: "none",
                          "&:hover": {
                            transform: "translateY(-2px)",
                            transition: "transform 0.2s",
                          },
                        }}
                      >
                        {button.text}
                      </Button>
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default ImageCarousel;
