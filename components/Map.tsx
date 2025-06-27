import { Box } from "@mui/material";

interface MapProps {
  src: string;
}

export default function Map({ src }: MapProps) {
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
        title="Britakov"
        src={src}
        width="100%"
        height="400"
        style={{
          border: 0,
          maxWidth: "600px",
          minWidth: "250px",
          borderRadius: "24px",
          filter: "invert(90%) hue-rotate(180deg)",
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
}
