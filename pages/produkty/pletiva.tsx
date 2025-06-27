import { Container, Typography, Grid, Card, Box } from "@mui/material";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import TitleDescriptionSection from "../../components/TitleDescriptionSection";

const productCategories = [
  {
    title: "Vinohradnícke systémy",
    description:
      "Kompletné riešenia pre vinohrady vrátane stĺpikov, drôtov a ochranných pletív",
    image: "/images/pletiva.jpg",
    items: [
      "Vinohradnícke stĺpiky",
      "Vinohradnícke drôty",
      "Ochrana vinohradov – pletivá",
      "Príslušenstvo",
    ],
  },
  {
    title: "Moderné panelové oplotenie",
    description: "Elegantné a bezpečné oplotenie pre váš domov",
    image: "/images/pletiva.jpg",
    items: [
      "Panely AGÁT",
      "Panely AMETYST",
      "Panely ÓNYX",
      "Panely RUBÍN",
      "Panely SMARAGD",
      "Brány TOP",
    ],
  },
  {
    title: "Štvorhranné pletivá",
    description: "Kvalitné pletivá pre každé použitie",
    image: "/images/pletiva.jpg",
    items: [
      "Pozinkované štvorhranné pletivá",
      "Poplastované štvorhranné pletivá",
      "Oborové pletivo",
    ],
  },
  {
    title: "Plotové diely",
    description: "Profesionálne plotové systémy",
    image: "/images/pletiva.jpg",
    items: [
      "Plotové diely GALAXIA PVC",
      "Plotové diely GALAXIA ZN",
      "Plotové diely GALAXIA LIGHT PVC",
      "Plotové diely GALAXIA LIGHT ZN",
      "Plotové diely MERKUR",
      "Plotové diely DOUBLE",
    ],
  },
  {
    title: "Uzlové a farmárske pletivá",
    description: "Spoľahlivé pletivá pre poľnohospodárstvo",
    image: "/images/pletiva.jpg",
    items: ["Uzlové pletivo", "Farmárske pletivo (zvárané pletivo PVC)"],
  },
  {
    title: "Brány a bránky",
    description: "Funkčné a estetické riešenia pre váš vstup",
    image: "/images/pletiva.jpg",
    items: [
      "Bránka jednokrídlová (BJ)",
      "Brána dvojkrídlová (BD)",
      "Bránka záhradná jednokrídlová (BJZ)",
      "Bránka záhradná dvojkrídlová (BDZ)",
      "Brána samonosná (BS)",
    ],
  },
  {
    title: "Stĺpiky a vzpery",
    description: "Stabilné a odolné podperné systémy",
    image: "/images/pletiva.jpg",
    items: [
      "Stĺpik a vzpera ZN",
      "Stĺpik a vzpera BPL",
      "Stĺpik a vzpera AQUIGRAF",
      "Stĺpiky ATLANTIS k plotovým dielom",
      "Stĺpiky BPL60",
      "Stĺpiky UNIVERZAL pre okrasné pletivá",
      "Stĺpiky GALAXIA k plotovým dielom",
    ],
  },
  {
    title: "Okrasné ohradové pletivá",
    description: "Estetické riešenia pre vašu záhradu",
    image: "/images/pletiva.jpg",
    items: ["Jardinet", "Luxanet"],
  },
  {
    title: "Príslušenstvo k pletivám a plotom",
    description: "Kompletné príslušenstvo pre všetky typy pletív a plotov",
    image: "/images/pletiva.jpg",
    items: [
      "Príslušenstvo k štvorhranným pletivám",
      "Príslušenstvo k zváraným ohradových pletivám",
      "Príslušenstvo k plotovým dielom",
      "Príchytky GALAXIA PVC k plotovým dielom GALAXIA a GALAXIA LIGHT",
      "Podhrabové dosky",
      "Príchytky ATLANTIS k plotovým dielom",
      "Držiak podhrabovej dosky",
    ],
  },
  {
    title: "Ostatné výrobky",
    description: "Široký sortiment kovových výrobkov a materiálov",
    image: "/images/pletiva.jpg",
    items: [
      "Zvárané ohradové pletivá",
      "Kovové tkanivá",
      "Rabicové tkanivá",
      "Rebierkové pletivo a diely",
      "Šesťhranné pletivá",
      "Klince",
      "Zvárané štvorhranné pletivá",
      "Drôty",
      "Ohradové boxy",
      "Ostatné výrobky",
    ],
  },
];

function Pletiva() {
  return (
    <Layout>
      <TitleDescriptionSection
        title="Pletivá"
        description="Vyberte si zo širokej škály pletív. V ponuke sú výrobky z fotogalérie a návrhy z katalógov. Vieme vypracovať produkty aj podľa vlastnej predlohy."
      />
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {productCategories.map((category, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "24px",
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
                  // Handle category click
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: 200,
                    width: "100%",
                  }}
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    component="h2"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {category.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {category.description}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    {category.items.map((item, itemIndex) => (
                      <Typography
                        key={itemIndex}
                        component="li"
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 0.5 }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

export default Pletiva;
