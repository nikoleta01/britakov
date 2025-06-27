import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface SliderArrowProps {
  direction: "left" | "right";
  onClick: () => void;
}

const SliderArrow = ({ direction, onClick }: SliderArrowProps) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        [direction]: 24,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "#fff",
        width: 48,
        height: 48,
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
