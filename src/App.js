import { createTheme, ThemeProvider } from "@material-ui/core";
import Dashboard from "./pages/dashboard";
import './App.css'

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Prompt", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
