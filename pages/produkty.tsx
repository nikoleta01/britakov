import { Box, Container, Typography, Card, Grid, Chip } from "@mui/material";
import Layout from "../components/layout/Layout";
import { NextPage } from "next";
import router from "next/router";
import TitleDescriptionSection from "../components/common/TitleDescriptionSection";
import spojovaci from "../src/images/products/spojovaci.jpg";
import { StaticImageData } from "next/image";
// import Offer from "../components/Offer";
import { useState } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

interface SubSubcategory {
  title: string;
}

interface Subcategory {
  title: string;
  subcategories?: SubSubcategory[];
}

interface ProductCategory {
  id: string;
  title: string;
  image: StaticImageData;
  redirectTo: string;
  subcategories?: Subcategory[];
}

const productCategories: ProductCategory[] = [
  {
    id: "kovovyroba",
    subcategories: [
      {
        title: "Brány",
        subcategories: [{ title: "Moderné brány" }, { title: "Kované brány" }],
      },
      { title: "Zábradlia" },
      { title: "Mreže" },
      { title: "Oceľové konštrukcie" },
      { title: "Doplnky" },
    ],
    title: "KOVOVÝROBA",
    image: spojovaci,
    redirectTo: "/produkty/kovovyroba",
  },
  {
    id: "interier",
    title: "HUTNÍCKY MATERIÁL",
    subcategories: [
      { title: "Pletivá" },
      { title: "Spojovací a kotevný materiál" },
    ],
    image: spojovaci,
    redirectTo: "/produkty/hutnicky-material",
  },
  {
    id: "exterier",
    title: "SPOJOVACÍ MATERIÁL",
    image: spojovaci,
    redirectTo: "/produkty/spojovaci-material",
  },
];

const Products: NextPage = () => {
  const [expandedSubcategories, setExpandedSubcategories] = useState<
    Record<string, boolean>
  >({});

  const toggleSubcategory = (categoryId: string, subcategoryIndex: number) => {
    const key = `${categoryId}-${subcategoryIndex}`;
    setExpandedSubcategories((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Layout>
      {/* Hero section */}
      <TitleDescriptionSection
        title="Naše Produkty"
        description="Ponúkame široký sortiment výrobkov z kovu. V ponuke sú výrobky z fotogalérie, ďalších vzorov a návrhov z katalógov a prospektov, alebo podľa vlastnej predlohy zákazníka."
        showBackButton={true}
        backButtonText="Späť"
        backButtonHref="/"
      />

      {/* Product tabs */}
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {productCategories.map((category, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
              <Card
                sx={{
                  minHeight: 280,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: 1,
                  position: "relative",
                  backgroundImage: `url(${category.image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: 6,
                  },
                }}
                onClick={() => {
                  router.push(category.redirectTo);
                }}
              >
                {/* Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0,0,0,0.65)",
                    zIndex: 0,
                  }}
                />

                {/* Content */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    p: 2.5,
                    width: "100%",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  {/* Title at the top */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: "primary.light",
                      fontSize: "1.3rem",
                      zIndex: 2,
                    }}
                  >
                    {category.title}
                  </Typography>

                  {/* Subcategories in the middle */}
                  {category.subcategories &&
                    category.subcategories.length > 0 && (
                      <Box
                        sx={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 0.8,
                            flexWrap: "wrap",
                          }}
                        >
                          {category.subcategories.map(
                            (subcategory, subIndex) => (
                              <Box key={subIndex}>
                                <Chip
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (subcategory.subcategories) {
                                      toggleSubcategory(category.id, subIndex);
                                    }
                                  }}
                                  sx={{
                                    width: "100%",
                                    backgroundColor:
                                      "hsla(0, 0.00%, 0.00%, 0.14)",
                                    color: "white",
                                    border:
                                      "1px solid rgba(255, 255, 255, 0.3)",
                                    borderRadius: "14px",
                                    fontSize: "0.7rem",
                                    height: "24px",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                      backgroundColor: "primary.main",
                                      borderColor: "primary.light",
                                    },
                                    "& .MuiChip-label": {
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      width: "100%",
                                    },
                                  }}
                                  label={
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        width: "100%",
                                      }}
                                    >
                                      <span>{subcategory.title}</span>
                                      {subcategory.subcategories &&
                                        (expandedSubcategories[
                                          `${category.id}-${subIndex}`
                                        ] ? (
                                          <ExpandLess
                                            sx={{ fontSize: "16px" }}
                                          />
                                        ) : (
                                          <ExpandMore
                                            sx={{ fontSize: "16px" }}
                                          />
                                        ))}
                                    </Box>
                                  }
                                />

                                {/* Sub-subcategories */}
                                {subcategory.subcategories &&
                                  expandedSubcategories[
                                    `${category.id}-${subIndex}`
                                  ] && (
                                    <Box sx={{ ml: 2, mt: 0.5 }}>
                                      {subcategory.subcategories.map(
                                        (subSubcategory, subSubIndex) => (
                                          <Chip
                                            key={subSubIndex}
                                            sx={{
                                              width: "100%",
                                              backgroundColor:
                                                "hsla(0, 0.00%, 0.00%, 0.08)",
                                              color: "rgba(255, 255, 255, 0.8)",
                                              border:
                                                "1px solid rgba(255, 255, 255, 0.2)",
                                              borderRadius: "12px",
                                              fontSize: "0.65rem",
                                              height: "20px",
                                              mb: 0.4,
                                              transition: "all 0.2s ease",
                                              "&:hover": {
                                                backgroundColor:
                                                  "primary.light",
                                                color: "white",
                                              },
                                            }}
                                            label={subSubcategory.title}
                                            onClick={(e) => e.stopPropagation()}
                                          />
                                        )
                                      )}
                                    </Box>
                                  )}
                              </Box>
                            )
                          )}
                        </Box>
                      </Box>
                    )}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* <Box sx={{ my: 4 }}>
          <Offer />
        </Box> */}
      </Container>
    </Layout>
  );
};

export default Products;
