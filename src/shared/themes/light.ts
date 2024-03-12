// Criando theme com material ui
import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

export const LightTheme  = createTheme({
  //  criando o thema personalizado
  palette: {
    // criando paletas de cores
    primary: {
      main: grey[700],
      dark: grey[800],
      light: grey[500],
      contrastText: '#fff',
      },
      secondary: {
        main: grey[900],
        dark: grey[800],
        light: grey[500],
        contrastText: '#fff',
        },
        background: {
        default: "#eeedeb",
        paper: grey[700],
      },
    }
});