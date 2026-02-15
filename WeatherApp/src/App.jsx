import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "@/context/theme-provider";
import MainCard from "./components/Card";
import { WeatherProvider } from "./context/weatherContext";
import LoadingSkeleton from "./components/LoadingSkeleton";

function App() {
  return (
    <WeatherProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="container m-auto h-screen w-full">
          <Header />
          <MainCard />
        </div>
      </ThemeProvider>
    </WeatherProvider>
  );
}

export default App;
