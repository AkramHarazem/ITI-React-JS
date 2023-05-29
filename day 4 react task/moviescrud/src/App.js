import { Grid } from '@mui/material';
import './App.css';
// import Movies from './components/Movies';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import ToggleColorMode from './components/ToggleColorMode';


// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={darkTheme}>
    // <CssBaseline />
    <>
    <Grid 
    container
    spacing={{ xs: 1, sm: 2 }}
    direction="row"
    flexWrap="wrap"
    justifyContent="center"
    >
     <ToggleColorMode></ToggleColorMode>
    </Grid>
    </>   
  );
}

export default App;
