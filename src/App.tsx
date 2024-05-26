import { ThemeProvider } from "@mui/material";
import "./main.css";
import { Header } from "components/atoms/header/Header";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "routes/Routes";
import { theme } from "theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <div className="app-container">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
