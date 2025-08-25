import Container from "../../components/Container";
import jessDrawing from "../../assets/jess-drawing.png";
import inDesignImage from "../../assets/indesign.png";
import photoshopImage from "../../assets/photoshop.png";
import illustratorImage from "../../assets/illustrator.png";
import figmaImage from "../../assets/figma.png";
import canvaImage from "../../assets/canva.png";
import folletoPromocion1Image from "../../assets/folleto-promocion.png";
import folletoPromocion2Image from "../../assets/folleto-promocion2.png";
import latamHorizontalImage from "../../assets/latam-horizontal.jpg";
import latamVerticalImage from "../../assets/latam-vertical.jpg";
import revistaV1Image from "../../assets/REVISTA-V-1.png";
import revistaV2Image from "../../assets/REVISTA-V-2.png";
import camisaImage from "../../assets/camisa-innovacion.png";
import {
  Dribbble,
  CheckCircle,
  FileArchive,
  Layers,
  Linkedin,
  Mail,
  Package,
  Palette,
  Phone,
  Printer,
  Scissors,
  Truck,
} from "lucide-react";
import Herramienta from "../../components/Herramienta";
import TagCloud from "../../components/TagCloud";
import Proyectos from "../../components/Proyectos";
import ProyectoTipo from "../../ProyectoTipo";
import { useState } from "react";
import ContactForm from "../../components/ContactForm";

function Home() {
  const roles = [
    {
      role: "Auxiliar de calidad en producción gráfica",
      RoleIcon: CheckCircle,
    },
    { role: "Auxiliar de despachos en producción gráfica", RoleIcon: Truck },
    { role: "Auxiliar de diseño gráfico", RoleIcon: Palette },
    { role: "Auxiliar de producción gráfica", RoleIcon: Layers },
    {
      role: "Auxiliar de suministros en producción gráfica",
      RoleIcon: Package,
    },
    {
      role: "Auxiliar de terminados y acabados en producción gráfica",
      RoleIcon: Scissors,
    },
    { role: "Auxiliar de Producción Gráfica", RoleIcon: Printer },
    { role: "Operario archivo de planchas", RoleIcon: FileArchive },
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
            <p>¡Hola! soy Jessica Santos, estudiante de Diseño Gráfico.</p>
            <p>
              En este portafolio está todos las actividades que he realizado
              tanto académicamente como personalmente, cada uno de estos refleja
              tantos mis habilidades, mi pensamiento visual, estilo y emoción a
              la hora de crear un nuevo diseño.
            </p>
          </div>
          <img src={jessDrawing} alt="Imagen about me" />
        </div>
      </Container>
      <Container classNames="herramientas-container">
        <h1>Herramientas</h1>
        <div className="herramientas">
          <Herramienta src={figmaImage} alt="Figma" nivel={2} />
          <Herramienta src={illustratorImage} alt="Illustrator" nivel={5} />
          <Herramienta src={photoshopImage} alt="Photoshop" nivel={4} />
          <Herramienta src={inDesignImage} alt="InDesign" nivel={4} />
          <Herramienta src={canvaImage} alt="Canvas" nivel={4} />
        </div>
      </Container>
      <Container classNames="cargos-container">
        <h1 className="titulo-desempeno">Áreas de desempeño</h1>
        <TagCloud roles={roles} />
        <p className="comentario-desempeno">
          <span className="solo-movil">
            Pulsa el ícono para ver el cargo completo
          </span>
          <span className="solo-pc">
            Arrastra el mouse en el ícono para ver el cargo completo
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
        <div className="column">
          <ContactForm />
        </div>
        <div className="column">
          <h4>Información de contacto:</h4>
          <a href="tel:+573003745115">
            <div className="contact-info">
              <Phone />
              <p>+57 300 374 5115</p>
            </div>
          </a>
          <a href="mailto:jessloren0613@gmail.com">
            <div className="contact-info">
              <Mail />
              <p>jessloren0613@gmail.com</p>
            </div>
          </a>
          <h4>Redes sociales:</h4>
          <div className="media">
            <a>
              <Dribbble className="in-process" />
              <span className="tooltip">En desarrollo</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jessica-santos-531370362/"
              target="_blank"
            >
              <Linkedin />
            </a>
          </div>
          <div className="creditos-destacados">
            <p className="name destacado">
              🎨 Diseñado por{" "}
              <a
                href="https://www.linkedin.com/in/jessica-santos-531370362/"
                target="_blank"
              >
                Jessica Santos
              </a>{" "}
              con Figma
            </p>
            <p className="name destacado">
              💻 Desarrollado por{" "}
              <a href="https://github.com/ju4ncb" target="_blank">
                Juan Caballero
              </a>{" "}
              con React
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
