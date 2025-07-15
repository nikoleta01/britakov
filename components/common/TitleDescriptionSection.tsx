import { Container, Typography, Box, Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/router";

interface TitleDescriptionSectionProps {
  title: string;
  description: string;
  showBackButton?: boolean;
  backButtonText?: string;
  backButtonHref?: string;
}

export default function TitleDescriptionSection({
  title,
  description,
  showBackButton = false,
  backButtonText = "Späť",
  backButtonHref,
}: TitleDescriptionSectionProps) {
  const router = useRouter();

  const handleBackClick = () => {
    if (backButtonHref) {
      router.push(backButtonHref);
    } else {
      router.back();
    }
  };

  return (
    <Box
      py={4}
      sx={{
        bgcolor: "secondary.main",
        color: "white",
        position: "relative",
      }}
    >
      <Container>
        {showBackButton && (
          <Button
            onClick={handleBackClick}
            startIcon={<ArrowBack />}
            variant="outlined"
            sx={{
              color: "white",
              mb: 1,
              borderRadius: "24px",
              fontSize: "0.9rem",
              fontWeight: 500,
              textTransform: "none",
            }}
          >
            {backButtonText}
          </Button>
        )}

        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700 }}
          color="primary.main"
        >
          {title}
        </Typography>
        <Typography variant="h6" component="p" sx={{ maxWidth: 800 }}>
          {description}
        </Typography>
      </Container>
    </Box>
  );
}
