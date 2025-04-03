import Container from "./components/Container";
import artesGraficas from "./assets/artes-graficas.jpg";
import inDesignImage from "./assets/indesign.png";
import photoshopImage from "./assets/photoshop.png";
import illustratorImage from "./assets/illustrator.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";

function App() {
  return (
    <>
      <header>
        <div>
          <h1>Mi portafolio</h1>
          <h5>Jessica Santos | Diseñadora gráfica</h5>
        </div>
      </header>
      <Container>
        <div className="acerca-de-mi">
          <div className="text-container">
            <h1>Informacion acerca de mi</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem sapiente culpa quia. Debitis ab rerum minus
              molestias iure, quae error iusto a consequatur tenetur adipisci
              odit sit magnam repellat? Facilis!
            </p>
          </div>
          <img src={artesGraficas} alt="Imagen about me" />
        </div>
      </Container>
      <Container classNames="herramientas-container">
        <h1>Herramientas</h1>
        <div className="herramientas">
          <img src={illustratorImage}></img>
          <img src={photoshopImage}></img>
          <img src={inDesignImage}></img>
        </div>
      </Container>
      <Container></Container>
      <Container>Pendiente</Container>
      <footer>
        <p>Jessica Santos</p>
        <div>
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Instagram />
          </a>
          <a href="#">
            <Linkedin />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
