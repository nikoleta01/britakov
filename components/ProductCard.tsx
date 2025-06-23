import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import router from "next/router";

interface ProductCardProps {
  category: {
    title: string;
    description: string;
    image: string;
    redirectTo: string;
  };
}

function ProductCard({ category }: ProductCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
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
          transform: "translateY(-8px)",
          boxShadow: 6,
          cursor: "pointer",
        },
      }}
      onClick={() => {
        router.push(category.redirectTo);
      }}
    >
      <CardMedia
        component="img"
        image={category.image}
        alt={category.title}
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
        >
          {category.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {category.description}
        </Typography>
        <Box sx={{ mt: "auto" }}>
          <Button
            variant="text"
            color="primary"
            endIcon={
              <span style={{ fontSize: 18, fontWeight: "bold" }}>&#8594;</span>
            }
            sx={{
              borderRadius: "24px",
              fontWeight: 500,
              textTransform: "none",
              px: 0,
              py: 0,
              minWidth: 0,
              fontSize: "1rem",
            }}
          >
            Viac
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
