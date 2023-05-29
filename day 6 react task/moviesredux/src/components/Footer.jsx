import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box  style={{
       width: "100%",
       minHeight: "15vh",
       display: "flex",
       flexDirection: "column",
      }}
     py={2} px={3}>
            <Box flexGrow={1}></Box>
      <Typography variant="body2" align="center">
      all rights reserved © 2023 Akram Harazem
              {/* <Link href="https://example.com" color="inherit" underline="always">
          Example Link
        </Link> */}
      </Typography>
    </Box>
  );
};

export default Footer;