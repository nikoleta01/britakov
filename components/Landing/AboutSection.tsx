import { Box, Grid, Typography, Container } from "@mui/material";
import HandymanIcon from "@mui/icons-material/Handyman";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import ShieldIcon from "@mui/icons-material/Shield";

import type { StaticImageData } from "next/image";
import Image from "next/image";

import about1 from "../../src/images/about/1.jpg";
import about2 from "../../src/images/about/2.jpg";
import about3 from "../../src/images/about/3.jpg";
import about4 from "../../src/images/about/4.jpg";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: StaticImageData;
}

const features: Feature[] = [
  {
    icon: <ArchitectureIcon sx={{ fontSize: 40 }} />,
    title: "Tradičné kovanie",
    image: about1,
    description:
      "Kováčstvo je považované za jedno z najstarších remesiel na svete. Kováčov si odpradávna vážili na celom svete pre ich zmysel vytvoriť z chladného kusu železa najrozmanitejšie funkčné a estetické výrobky.",
  },
  {
    icon: <HandymanIcon sx={{ fontSize: 40 }} />,
    title: "Precízne prevedenie",
    image: about2,
    description:
      "Pri našej výrobe zachovávame tradičné postupy ručného kovania v ohni. Dôraz kladieme na precízne prevedenie každého detailu. Výrobky realizujeme na základe objednávky a predstáv zákazníka.",
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 40 }} />,
    title: "Na mieru",
    image: about3,
    description:
      "V ponuke sú výrobky z fotogalérie, ďalšich vzorov a návrhov z katalógov a prospektov, alebo podľa vlastnej predlohy zákazníka. Novinkou je nerezový program zábradlia alebo prístreškov, kombinácia železa s inými farebnými kovmi, drevom, sklom, lexanom.",
  },
  {
    icon: <ShieldIcon sx={{ fontSize: 40 }} />,
    title: "Ochrana proti korózii",
    image: about4,
    description:
      "Záruku proti korózii zabezpečujeme žiarovým zinkovaním. Pri povrchovej úprave okrem tradičnej čiernej farby ponúkame širokú škálu odtieňov podľa vzorkovníka RAL, farby kladivkové, grafitové a zrnkové. Ponúkame aj možnosť patinovania zlatou, striebornou, medenou a zelenou patinou.",
  },
];

function AboutSection() {
  return (
    <Container>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          color: "primary.main",
          fontWeight: "bold",
          mb: 6,
          textAlign: "center",
        }}
      >
        O nás
      </Typography>
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
            <Box
              sx={{
                height: "100%",
                minHeight: "320px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                p: 3,
                borderRadius: "24px",
                bgcolor: "background.paper",
                boxShadow:
                  "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
                // Overlay that changes opacity on hover
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "background.paper",
                  opacity: 0.6,
                  transition: "opacity 0.3s ease-in-out",
                  zIndex: 2,
                },
                "&:hover::before": {
                  opacity: 1,
                },
                // Content positioning
                "& > *:not(img)": {
                  position: "relative",
                  zIndex: 3,
                },
              }}
            >
              {/* Next.js Image as background */}
              <Image
                src={feature.image.src}
                alt={feature.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  zIndex: 1,
                }}
                priority={index < 4} // Load first 4 images with priority
              />

              {/* Content */}
              <Box sx={{ color: "primary.main", mb: 2 }}>{feature.icon}</Box>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{ fontWeight: "bold", color: "text.primary" }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  flex: 1,
                  color: "text.primary",
                  opacity: 0.9,
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AboutSection;
