import { Container, Typography, Box } from "@mui/material";

interface TitleDescriptionSectionProps {
  title: string;
  description: string;
}

export default function TitleDescriptionSection({
  title,
  description,
}: TitleDescriptionSectionProps) {
  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        color: "white",
        pt: 8,
        pb: 6,
        position: "relative",
      }}
    >
      <Container>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700 }}
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
