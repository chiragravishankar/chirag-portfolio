import MenuBar from "./components/MenuBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import { Speaking, Beyond, Contact, Footer } from "./components/Extras";
import { useTheme } from "./hooks";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <>
      <MenuBar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Work />
        <Speaking />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
