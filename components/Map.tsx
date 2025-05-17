import { Box } from "@mui/material";

export default function Map() {
  return (
    <Box
      sx={{
        // flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        title="Britakov Location Map"
        src="https://www.google.com/maps?q=Strelnica+241%2F6%2C+Ro%C5%BE%C5%88avsk%C3%A1+Ba%C5%88a%2C+048+01+Ro%C5%BE%C5%88ava&output=embed"
        width="100%"
        height="400"
        style={{
          border: 0,
          maxWidth: "600px",
          minWidth: "250px",
          borderRadius: "24px",
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
}
