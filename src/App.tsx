import Container from "./components/Container";
import artesGraficas from "./assets/artes-graficas.jpg";
import inDesignImage from "./assets/indesign.png";
import photoshopImage from "./assets/photoshop.png";
import illustratorImage from "./assets/illustrator.png";
import folletoPromocion1Image from "./assets/folleto-promocion.png";
import folletoPromocion2Image from "./assets/folleto-promocion2.png";
import latamHorizontalImage from "./assets/latam-horizontal.jpg";
import latamVerticalImage from "./assets/latam-vertical.jpg";
import revistaV1Image from "./assets/REVISTA-V-1.png";
import revistaV2Image from "./assets/REVISTA-V-2.png";
import camisaImage from "./assets/camisa-innovacion.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Herramienta from "./components/Herramienta";
import TagCloud from "./components/TagCloud";
import Proyectos from "./components/Proyectos";
import ProyectoTipo from "./ProyectoTipo";
import { useState } from "react";

function App() {
  const roles = [
    "Auxiliar de calidad en producción gráfica",
    "Auxiliar de despachos en producción gráfica",
    "Auxiliar de diseño gráfico",
    "Auxiliar de producción gráfica",
    "Auxiliar de suministros en producción gráfica",
    "Auxiliar de terminados y acabados en producción gráfica",
    "Auxiliar de Producción Gráfica",
    "Operario archivo de planchas",
  ];
  const proyectosFolletos = [
    {
      imagenAlt: "promocion1",
      imagenSrc: folletoPromocion1Image,
      titulo: "Folleto Smartwatch Colmi",
    },
    {
      imagenAlt: "promocion2",
      imagenSrc: folletoPromocion2Image,
      titulo: "Folleto Promoción",
    },
  ] as ProyectoTipo[];
  const proyectosRevistas = [
    {
      imagenAlt: "revista1",
      imagenSrc: revistaV1Image,
    },
    {
      imagenAlt: "revista2",
      imagenSrc: revistaV2Image,
    },
  ] as ProyectoTipo[];
  const proyectosBanners = [
    {
      imagenAlt: "banner1",
      imagenSrc: latamHorizontalImage,
      titulo: "Banner Latam Horizontal",
    },
    {
      imagenAlt: "banner2",
      imagenSrc: latamVerticalImage,
      titulo: "Banner Latam Vertical",
    },
  ] as ProyectoTipo[];
  const proyectosCamisas = [
    {
      imagenAlt: "camisa",
      imagenSrc: camisaImage,
      titulo: "Estampado Camisa Innovación",
    },
  ] as ProyectoTipo[];
  const [proyectosActivo, setProyectosActivo] = useState(0);
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
            <h1>Acerca de mi</h1>
            <p>
              ¡Hola! soy Jessica Santos, soy estudiante de Diseño Gráfico. En
              este portafolio está todos las actividades que he realizado tanto
              académicamente como personalmente, cada uno de estos refleja
              tantos mis habilidades, mi pensamiento visual, estilo y emocióna
              la hora de crear un nuevo diseño .
            </p>
          </div>
          <img src={artesGraficas} alt="Imagen about me" />
        </div>
      </Container>
      <Container classNames="herramientas-container">
        <h1>Herramientas</h1>
        <div className="herramientas">
          <Herramienta src={illustratorImage} alt="Illustrator" nivel={5} />
          <Herramienta src={photoshopImage} alt="Photoshop" nivel={4} />
          <Herramienta src={inDesignImage} alt="InDesign" nivel={4} />
        </div>
      </Container>
      <Container classNames="cargos-container">
        <h1 className="titulo-desempeno">Caja de áreas de desempeño</h1>
        <TagCloud roles={roles} />
        <p className="comentario-desempeno">
          <span className="solo-movil">
            Pulsa el cargo para ver el cargo completo
          </span>
          <span className="solo-pc">
            Arrastra el mouse en el cargo para ver el cargo completo
          </span>
        </p>
      </Container>
      <Container
        classNames={
          proyectosActivo !== 0
            ? `proyectos-container proyectos-${proyectosActivo}`
            : "proyectos-container"
        }
      >
        <div
          className="tipo-proyecto"
          onClick={() => {
            if (proyectosActivo !== 1) {
              setProyectosActivo(1);
            } else {
              setProyectosActivo(0);
            }
          }}
        >
          <h2 className={proyectosActivo !== 1 ? "mostrar" : "no-mostrar"}>
            Folletos
          </h2>
          <Proyectos
            proyectos={proyectosFolletos}
            mostrar={proyectosActivo === 1}
          />
        </div>
        <div
          className="tipo-proyecto"
          onClick={() => {
            if (proyectosActivo !== 2) {
              setProyectosActivo(2);
            } else {
              setProyectosActivo(0);
            }
          }}
        >
          <h2 className={proyectosActivo !== 2 ? "mostrar" : "no-mostrar"}>
            Revistas
          </h2>
          <Proyectos
            proyectos={proyectosRevistas}
            mostrar={proyectosActivo === 2}
          />
        </div>
        <div
          className="tipo-proyecto"
          onClick={() => {
            if (proyectosActivo !== 3) {
              setProyectosActivo(3);
            } else {
              setProyectosActivo(0);
            }
          }}
        >
          <h2 className={proyectosActivo !== 3 ? "mostrar" : "no-mostrar"}>
            Banners
          </h2>
          <Proyectos
            proyectos={proyectosBanners}
            mostrar={proyectosActivo === 3}
          />
        </div>
        <div
          className="tipo-proyecto"
          onClick={() => {
            if (proyectosActivo !== 4) {
              setProyectosActivo(4);
            } else {
              setProyectosActivo(0);
            }
          }}
        >
          <h2 className={proyectosActivo !== 4 ? "mostrar" : "no-mostrar"}>
            Estampados
          </h2>
          <Proyectos
            proyectos={proyectosCamisas}
            mostrar={proyectosActivo === 4}
          />
        </div>
      </Container>
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
