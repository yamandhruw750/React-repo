import { ThemeProvider } from "@/context/theme-provider";
import { WeatherProvider } from "./context/weatherContext";
import Header from "./components/Header";
import MainCard from "./components/Card";

function App() {
  return (
    <WeatherProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="h-screen w-full">
          <Header />
          <MainCard />
        </div>
      </ThemeProvider>
    </WeatherProvider>
  );
}

export default App;
