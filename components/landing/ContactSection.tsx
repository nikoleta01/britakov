import { Box, Container, Grid, Link, Typography } from "@mui/material";
import Map from "../Map";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function ContactSection() {
  return (
    <Container sx={{ my: 6 }}>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: 6,
          textAlign: "center",
        }}
      >
        Nájdete nás
      </Typography>

      <Grid container rowSpacing={4} columnSpacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Map src="https://www.google.com/maps?q=Strelnica+241%2F6%2C+Ro%C5%BE%C5%88avsk%C3%A1+Ba%C5%88a%2C+048+01+Ro%C5%BE%C5%88ava&output=embed" />
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <Box mt={2}>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{ fontWeight: 600, textAlign: "center", mb: 3 }}
            >
              Predajňa hutného materiálu
            </Typography>

            <Box display="flex" alignItems="center" gap={1} my={2}>
              <LocationOnIcon sx={{ color: "primary.main" }} />
              <Box>
                <Typography>Strelnica 241/6</Typography>
                <Typography>048 01 Rožňava</Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" gap={1} my={2}>
              <PhoneIcon sx={{ color: "primary.main" }} />
              <Typography>+421 902 322 787</Typography>
            </Box>

            <Box display="flex" alignItems="flex-start" gap={1}>
              <WatchLaterIcon
                sx={{
                  color: "primary.main",
                  mt: "2px", // nudge icon to align with top text
                }}
              />
              <Box>
                <Typography sx={{ fontWeight: 500, mb: 2 }}>
                  Otváracie hodiny
                </Typography>
                {["Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok"].map(
                  (day) => (
                    <Typography key={day}>{day}: 7:00 - 16:00</Typography>
                  )
                )}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container rowSpacing={4} columnSpacing={4} mt={4}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <Box mt={2}>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{ fontWeight: 600, textAlign: "center", mb: 3 }}
            >
              Predajňa spojovacieho materiálu
            </Typography>

            <Box display="flex" alignItems="center" gap={1} my={2}>
              <LocationOnIcon sx={{ color: "primary.main" }} />
              <Box>
                <Typography>Šafárikova 112</Typography>
                <Typography>048 01 Rožňava</Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="flex-start" gap={1}>
              <WatchLaterIcon
                sx={{
                  color: "primary.main",
                  mt: "2px", // nudge icon to align with top text
                }}
              />
              <Box>
                <Typography sx={{ fontWeight: 500, mb: 2 }}>
                  Otváracie hodiny
                </Typography>
                {["Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok"].map(
                  (day) => (
                    <Typography key={day}>{day}: 7:00 - 16:00</Typography>
                  )
                )}
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Map src="https://maps.google.com/maps?q=Šafárikova+112,+Rožňava,+Slovakia&z=15&output=embed" />
        </Grid>
      </Grid>

      {/* Additional Contacts */}
      <Box mt={8}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
          }}
        >
          Kontaktujte nás
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: 3,
                borderRadius: 2,
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Kovovýroba
              </Typography>
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <PhoneIcon sx={{ color: "primary.main" }} />
                <Typography>+421 902 322 787</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <EmailIcon sx={{ color: "primary.main" }} />
                <Link
                  href="mailto:britakov@britakov.sk"
                  sx={{
                    color: "text.primary",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  britakov@britakov.sk
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: 3,
                borderRadius: 2,
                bgcolor: "background.paper",
                boxShadow: 1,
              }}
            >
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Sekretariát
              </Typography>
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <PhoneIcon sx={{ color: "primary.main" }} />
                <Typography>+421 948 779 790</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <EmailIcon sx={{ color: "primary.main" }} />
                <Link
                  href="mailto:britakov@britakov.sk"
                  sx={{
                    color: "text.primary",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  britakov@britakov.sk
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ContactSection;
