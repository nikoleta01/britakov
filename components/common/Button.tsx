import { Button } from "@mui/material";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function CustomButton({ children, onClick }: CustomButtonProps) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        borderRadius: "24px",
        px: 3,
        py: 1,
        mt: 2,
        fontWeight: "bold",
        textTransform: "none",
        "&:hover": {
          transform: "translateY(-2px)",
          transition: "transform 0.2s",
        },
      }}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
