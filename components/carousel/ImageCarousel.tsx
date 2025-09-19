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
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../common/Button";
import SliderArrow from "./SliderArrow";

interface CarouselImage {
  src: string;
  alt: string;
  subtitle?: string;
  description?: string;
  buttons?: {
    text: string;
    link: string;
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
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentSlide, setCurrentSlide] = useState(2);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    swipe: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
      {/* Main carousel container */}
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

        {/* Navigation arrows with proper spacing */}
        {!isSmallScreen && (
          <>
            <Box
              sx={{
                position: "absolute",
                left: 24,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 3,
              }}
            >
              <SliderArrow direction="left" onClick={handlePrev} />
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: 24,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 3,
              }}
            >
              <SliderArrow direction="right" onClick={handleNext} />
            </Box>
          </>
        )}

        {/* Content overlay with improved positioning */}
        {showContent && images.length > 0 && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 100%)",
              zIndex: 2,
              // Ensure content doesn't overlap with arrows
              paddingLeft: !isSmallScreen ? "80px" : theme.spacing(3), // 80px gives space for left arrow + margin
              paddingRight: !isSmallScreen ? "80px" : theme.spacing(3), // 80px gives space for right arrow + margin
            }}
          >
            <Container
              maxWidth="lg"
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  maxWidth: isSmallScreen ? "100%" : "60%", // Slightly wider for better text layout
                  display: "flex",
                  flexDirection: "column",
                  gap: theme.spacing(2),
                }}
              >
                {/* Main title */}
                <Typography
                  variant={isSmallScreen ? "h4" : "h2"}
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    color: "#fff",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    lineHeight: 1.2,
                  }}
                >
                  UMELECKO-REMESELNÉ KOVÁČSTVO
                </Typography>

                {/* Subtitle */}
                <Typography
                  variant={isSmallScreen ? "h6" : "h5"}
                  component="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
                    lineHeight: 1.3,
                  }}
                >
                  {images[currentSlide]?.subtitle || ""}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "#fff",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                    lineHeight: 1.5,
                    maxHeight: isSmallScreen ? "4.5em" : "6em", // Limit height based on line-height
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: isSmallScreen ? 3 : 4,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {images[currentSlide]?.description || ""}
                </Typography>

                {/* Action buttons */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: theme.spacing(1),
                    mt: theme.spacing(1),
                  }}
                >
                  {images[currentSlide]?.buttons?.map((button, index) => (
                    <Link
                      key={index}
                      href={button.link}
                      passHref
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CustomButton
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                          if (button.link.startsWith("#")) {
                            e.preventDefault();
                            const element = document.querySelector(button.link);
                            element?.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        {button.text}
                      </CustomButton>
                    </Link>
                  ))}
                </Box>
              </Box>
            </Container>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ImageCarousel;
