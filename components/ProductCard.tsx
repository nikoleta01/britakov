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
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const animationStyle = {
    animation: "gentlePulse 2s ease-in-out infinite",
    animationDelay: "0s",
    "@keyframes gentlePulse": {
      "0%": {
        transform: "scale(1)",
        opacity: 1,
      },
      "25%": {
        transform: "scale(1.7)",
        opacity: 0.8,
      },
      "75%": {
        transform: "scale(1.3)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(1)",
        opacity: 1,
      },
    },
  };

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
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
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
                  sx={{
                    backgroundColor: "hsla(0, 0.00%, 0.00%, 0.14)",
                    color: "text.primary",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "14px",
                    fontSize: "0.7rem",
                    height: "24px",
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
        </Collapse>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ justifyContent: "center", p: 0, height: "48px" }}
      >
        {category?.subcategories && category.subcategories.length > 0 && (
          <IconButton onClick={handleExpandClick}>
            {isExpanded ? (
              <ExpandLessIcon color="primary" />
            ) : (
              <ExpandMoreIcon sx={animationStyle} color="primary" />
            )}
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}

export default ProductCard;
