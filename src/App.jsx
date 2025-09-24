import Menu from "./components/Menu/Menu.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Projetos from './components/Projetos/Projetos.jsx'

// arquivo principal
export default function App(){
  return(
    <div>
      <Menu />
      <Hero />
      <Projetos />
    </div>
  )
}
import Menu from "./components/Menu/Menu.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Projetos from "./components/Projetos/Projetos.jsx";
import Contato from "./components/Contato/Contato.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <div>
      <Menu />
      <Hero />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}
