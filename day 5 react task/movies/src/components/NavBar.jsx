import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// import { context } from "../context/Context";
import {context} from '../context/Context'
import { useContext } from "react";

const drawerWidth = 240;
const navItems = ["Home", "Add"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme()
  const IsMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <Link to={"/"} style={{textDecoration:"none"}}>
          HOME 
      </Link>
      </Typography>
      <Divider />
      <List>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <Link to={"/movies"} style={{textDecoration:"none" }}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary="Trending" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={"movies/add"} style={{textDecoration:"none" }}>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary="Add" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // const {word} = useContext(context)
  // const [Word,setWord] = useState(word)

  // const handleChange = (e) => {
  //   setWord(e.target.value);
  //   console.log(Word)
  // };
  // const {movies} = useContext(context)
  // const [Arr,setArr] = useState (movies)

  // const [word,setWord] = useState("")
  // const handleChange = (e) => {
  //         setWord(e.target.value);
  //       };
  //   useEffect(() => {
  //     setArr(
  //       movies?.filter((m) => m.title.toLowerCase().includes(word.toLowerCase()))
  //     );
  //   }, [word, movies]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
         <Typography
            variant="h6"
            component="div"
            sx={{  display: { xs: "none", sm: "block" } }}
          >
            <Link to={"/"} style={{textDecoration:"none", color:"white"}}>
              HOME
            </Link> 
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            
           {!IsMobile && <Link to="/movies">
              <Button sx={{
                 color: "#fff", 
                 "&:hover": {
                 backgroundColor: "#fff",
                 color: "#000"},
                 marginLeft:"15px"
             }}>
          Trending
          </Button>
            </Link>}
            {!IsMobile && <Link to="/movies/add">
              <Button sx={{ 
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#000"},
                  margin:"10px"
                 }}>
                  Add
                  </Button>
            </Link>}
            
          </Box>
          <input
              placeholder="Search"
              type="text"
              className="form-control"
              style={{ width: "30%",marginLeft:"auto",marginRight:"25px" }}
              // value={Word}
              // onChange={handleChange}
            />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              // boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
