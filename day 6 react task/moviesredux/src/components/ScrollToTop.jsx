import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState, useEffect } from "react";


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  });

  return (
    <>
      {isVisible && (
        <Box>
          <Fab
            onClick={ScrollToTop}
            sx={{
              position: "fixed",
              bottom: 5,
              right: 5,
              zIndex: 9999,
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      )}
    </>
  );
};
export default ScrollToTopButton;
