import ProyectoTipo from "../ProyectoTipo";

interface ProyectosProps {
  proyectos: ProyectoTipo[];
  mostrar: boolean;
}

interface ProyectoProps {
  titulo?: string;
  descripcion?: string;
  src: string;
  alt: string;
}

const Proyectos = ({ proyectos, mostrar }: ProyectosProps) => {
  return (
    <div className={mostrar ? "proyectos-mostrar proyectos" : "proyectos"}>
      {proyectos.map(({ titulo, imagenAlt, imagenSrc, descripcion }, index) => (
        <Proyecto
          key={index}
          titulo={titulo}
          descripcion={descripcion}
          src={imagenSrc}
          alt={imagenAlt}
        />
      ))}
    </div>
  );
};

const Proyecto = ({ titulo, src, alt, descripcion }: ProyectoProps) => {
  return (
    <div className="proyecto">
      {titulo && <h3>{titulo}</h3>}
      <img src={src} alt={alt} />
      {descripcion && <p>{descripcion}</p>}
    </div>
  );
};

export default Proyectos;
