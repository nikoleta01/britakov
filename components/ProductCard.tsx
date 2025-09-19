import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Collapse,
  CardActions,
  IconButton,
} from "@mui/material";
import { StaticImageData } from "next/image";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import router from "next/router";

interface ProductCardProps {
  category: {
    title: string;
    description: string;
    image: StaticImageData;
    redirectTo: string;
    subcategories?: string[];
  };
}

function ProductCard({ category }: ProductCardProps) {
  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "24px",
        border: "1px solid #333333",
        overflow: "hidden",
        boxShadow:
          "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: 6,
          cursor: "pointer",
        },
      }}
    >
      <CardMedia
        component="img"
        image={category.image.src}
        alt={category.title}
        onClick={() => {
          router.push(category.redirectTo);
        }}
        sx={{
          height: 180,
          objectFit: "cover",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "background.paper",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: 500, mb: 1 }}
          onClick={() => {
            router.push(category.redirectTo);
          }}
        >
          {category.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          onClick={() => {
            router.push(category.redirectTo);
          }}
        >
          {category.description}
        </Typography>
        {category?.subcategories && category.subcategories.length > 0 && (
          <Box
            sx={{
              display: "flex",
              gap: 0.8,
              flexWrap: "wrap",
              my: 2,
            }}
          >
            {category.subcategories.map((subcategory, index) => (
              <Chip
                key={index}
                variant="outlined"
                onClick={(e) => {
                  e.stopPropagation();
                  if (category.title === "Kovovýroba") {
                    router.push(`${category.redirectTo}?tab=${index}`);
                  } else {
                    router.push(category.redirectTo);
                  }
                }}
                sx={{
                  backgroundColor: "hsla(0, 0.00%, 0.00%, 0.14)",
                  color: "text.primary",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "14px",
                  fontSize: "0.7rem",
                  height: "24px",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                    borderColor: "primary.light",
                  },
                }}
                label={subcategory}
              />
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default ProductCard;
