import { IconButton, useTheme, useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface SliderArrowProps {
  direction: "left" | "right";
  onClick: () => void;
}

const SliderArrow = ({ direction, onClick }: SliderArrowProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <IconButton
      onClick={onClick}
      sx={{
        display: isSmallScreen ? "none" : "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        [direction]: 24,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "#fff",
        width: 48,
        border: 1,
        borderColor: "rgba(255, 255, 255, 0.5)",
        height: 48,
        borderRadius: "50%",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          transition: "transform 0.2s",
        },
      }}
    >
      {direction === "left" ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
    </IconButton>
  );
};

export default SliderArrow;
