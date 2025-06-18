import { Box, Grid, Typography, Container } from "@mui/material";
import HandymanIcon from "@mui/icons-material/Handyman";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import ShieldIcon from "@mui/icons-material/Shield";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <ArchitectureIcon sx={{ fontSize: 40 }} />,
    title: "Tradičné kovanie",
    description:
      "Kováčstvo je považované za jedno z najstarších remesiel na svete. Kováčov si odpradávna vážili na celom svete pre ich zmysel vytvoriť z chladného kusu železa najrozmanitejšie funkčné a estetické výrobky.",
  },
  {
    icon: <HandymanIcon sx={{ fontSize: 40 }} />,
    title: "Precízne prevedenie",
    description:
      "Pri našej výrobe zachovávame tradičné postupy ručného kovania v ohni. Dôraz kladieme na precízne prevedenie každého detailu. Výrobky realizujeme na základe objednávky a predstáv zákazníka.",
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 40 }} />,
    title: "Na mieru",
    description:
      "V ponuke sú výrobky z fotogalérie, ďalšich vzorov a návrhov z katalógov a prospektov, alebo podľa vlastnej predlohy zákazníka. Novinkou je nerezový program zábradlia alebo prístreškov, kombinácia železa s inými farebnými kovmi, drevom, sklom, lexanom.",
  },
  {
    icon: <ShieldIcon sx={{ fontSize: 40 }} />,
    title: "Ochrana proti korózii",
    description:
      "Záruku proti korózii zabezpečujeme žiarovým zinkovaním. Pri povrchovej úprave okrem tradičnej čiernej farby ponúkame širokú škálu odtieňov podľa vzorkovníka RAL, farby kladivkové, grafitové a zrnkové. Ponúkame aj možnosť patinovania zlatou, striebornou, medenou a zelenou patinou.",
  },
];

function AboutSection() {
  return (
    <Container sx={{ py: { xs: 6, md: 10 } }}>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ color: "primary.main", fontWeight: "bold", mb: 4 }}
      >
        O nás
      </Typography>
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                p: 3,
                borderRadius: "24px",
                bgcolor: "background.paper",
                color: "#fff",
                boxShadow:
                  "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <Box sx={{ color: "primary.main", mb: 2 }}>{feature.icon}</Box>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ flex: 1 }}>
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
