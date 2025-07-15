import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, Box } from "@mui/material";

function ScrollToTop() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "40px",
        right: "60px",
        zIndex: 100,
      }}
    >
      {isVisible && (
        <Button
          onClick={scrollToTop}
          variant="outlined"
          sx={{
            width: "40px",
            height: "40px",
            minWidth: "40px",
            padding: 0,
            backgroundColor: "background.paper",
            borderRadius: "50%",
            borderColor: "primary.main",
            color: "white",
            "&:hover": {
              transform: "translateY(-2px)",
              transition: "transform 0.2s",
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Button>
      )}
    </Box>
  );
}

export default ScrollToTop;
