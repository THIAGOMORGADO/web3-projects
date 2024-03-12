import { ThemeProvider } from "@mui/material";
import { AppRoutes } from "./routes";
import { LightTheme } from "./shared/themes";

export default function App() {
  return (
    <ThemeProvider theme={LightTheme}>
       <AppRoutes />
    </ThemeProvider>
   
  )
}
