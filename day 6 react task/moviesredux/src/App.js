import "./App.css";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SearchAppBar from "./components/NavBar";
import PrimarySearchAppBar from "./components/NavBar";
import { Grid } from "@mui/material";
import DrawerAppBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import AddMovie from "./components/AddMovie";
import UpdateMovie from "./components/UpdateMovie";
// import NotFound from "./components/NotFound";
// import MoviesModule from "./modules/MoviesModule";
import { lazy, Suspense } from "react";
import SimpleBackdrop from "./components/spinner";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTop";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
const MoviesModule = lazy(() => import("./modules/MoviesModule"));
const NotFound = lazy(() => import("./components/NotFound"));

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Grid
      container
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
    >
      <IconButton
        sx={{ ml: 1, mt: 3.5, right: 0, zIndex: 1101, position: "fixed" }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
      <Box
        sx={{
          display: "flex",
          direction: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 1,
        }}
      >
        <Provider store={store}>
          <Suspense fallback={<SimpleBackdrop></SimpleBackdrop>}>
            <BrowserRouter>
              <ScrollToTopButton />
              <DrawerAppBar></DrawerAppBar>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  mt: 10,
                }}
              >
                <Routes>
                  <Route path="/" element={<Home></Home>}></Route>
                  <Route
                    path="movies/*"
                    element={<MoviesModule></MoviesModule>}
                  ></Route>
                  <Route path="*" element={<NotFound></NotFound>}></Route>
                </Routes>
                <Footer />
              </Box>
            </BrowserRouter>
          </Suspense>
        </Provider>
      </Box>
    </Grid>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
