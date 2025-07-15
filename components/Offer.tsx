import {
  Paper,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const boxShadow = "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)";

function Offer() {
  return (
    <Grid container spacing={4}>
      {/* 1 */}
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <Paper
          sx={{
            p: 3,
            borderRadius: "24px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            bgcolor: "primary.main",
            boxShadow,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, mb: 1, color: "white" }}
          >
            ZABEZPEČUJEME
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="- montáž" sx={{ color: "white" }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="- prepravu" sx={{ color: "white" }} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="- pozáručný servis"
                sx={{ color: "white" }}
              />
            </ListItem>
          </List>
        </Paper>
      </Grid>
      {/* 2 */}
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <Paper
          sx={{
            p: 3,
            borderRadius: "24px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            bgcolor: "paper.main",
            boxShadow,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, mb: 1, color: "primary.main" }}
          >
            Zábradlia
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
            - schodiskové
            <br />
            - terasové
            <br />- balkónové
          </Typography>
        </Paper>
      </Grid>
      {/* 3 */}
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <Paper
          sx={{
            p: 3,
            borderRadius: "24px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            boxShadow: boxShadow,
            position: "relative",
            overflow: "hidden",
            backgroundImage: "url('/images/pletiva.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(0,0,0,0.65)",
              zIndex: 0,
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              mb: 1,
              position: "relative",
              zIndex: 1,
              color: "white",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Exteriérové doplnky
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              position: "relative",
              zIndex: 1,
              color: "white",
              pl: 2,
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            - záhradný nábytok
            <br />
            - náradia k záhradným krbom
            <br />
            - kované mreže na studne
            <br />
            - kované fontány
            <br />
            - záhradné hojdačky
            <br />
            - kované strešné krytiny
            <br />- kované alebo tepané čísla domov
          </Typography>
        </Paper>
      </Grid>
      {/* 4 */}
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <Paper
          sx={{
            p: 3,
            borderRadius: "24px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            bgcolor: "paper.main",
            boxShadow:
              "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Kované brány
          </Typography>
          <Typography variant="body2" color="text.secondary" pl={2}>
            - krídlové
            <br />
            - posuvné kolieskové
            <br />
            - posuvné samostatné
            <br />
            - brány
            <br />- ploty
          </Typography>
        </Paper>
      </Grid>
      {/* 5 */}
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <Paper
          sx={{
            p: 3,
            borderRadius: "24px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            bgcolor: "paper.main",
            boxShadow,
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Kované bytové zariadenia
          </Typography>
          <Typography variant="body2" color="text.secondary" pl={2}>
            - stoly
            <br />
            - stoličky
            <br />
            - postele
            <br />
            - vešiaky
            <br />- garníže
          </Typography>
        </Paper>
      </Grid>
      {/* 6 */}
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <Paper
          sx={{
            p: 3,
            borderRadius: "24px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            boxShadow,
            position: "relative",
            overflow: "hidden",
            backgroundImage: "url('/images/interier.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(0,0,0,0.65)",
              zIndex: 0,
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              mb: 1,
              position: "relative",
              zIndex: 1,
              color: "white",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Interiérové doplnky
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              position: "relative",
              zIndex: 1,
              color: "white",
              pl: 2,
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            - lustre
            <br />
            - svietniky
            <br />
            - stojany na kvety
            <br />
            - stojany na fľašové víno
            <br />
            - krbové súpravy
            <br />
          </Typography>
        </Paper>
      </Grid>
      {/* 7 */}
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <Paper
          sx={{
            p: 3,
            borderRadius: "24px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            bgcolor: "primary.main",
            boxShadow,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, mb: 1, color: "white" }}
          >
            PONÚKAME
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="- zámočnícke práce"
                sx={{ color: "white" }}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="- konštrukcie" sx={{ color: "white" }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="- schodiská" sx={{ color: "white" }} />
            </ListItem>
          </List>
        </Paper>
      </Grid>
      {/* 8 */}
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <Paper
          sx={{
            p: 3,
            borderRadius: "24px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            bgcolor: "paper.main",
            boxShadow,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, mb: 1, color: "primary.main" }}
          >
            Na studne, fontány, hojdačky, strešné krytiny
          </Typography>
          <Typography variant="body2" color="text.secondary">
            (LEXAN, sklo alebo iný materiál), kované alebo tepané
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Offer;
