type Nivel = 1 | 2 | 3 | 4 | 5;

interface HerramientaProps {
  nivel: Nivel; // Del 1 al 5
  src: string;
  alt: string;
}

const Herramienta = ({ nivel, src, alt }: HerramientaProps) => {
  const nivelesDescripcionMap: { [key in Nivel]: string } = {
    1: "Novato",
    2: "Aprendiz",
    3: "Intermedio",
    4: "Avanzado",
    5: "Experto",
  };
  const nivelesMap = Array(5)
    .fill(0)
    .map((_, index) => {
      if (index < nivel) {
        return 1;
      }
    });
  return (
    <div className="herramienta">
      <img src={src} alt={alt} />
      <div className="niveles">
        {nivelesMap.map((x, index) => (
          <div
            key={index}
            className={
              x == 1
                ? `nivel nivel-${index + 1}`
                : `nivel none nivel-${index + 1}`
            }
          />
        ))}
      </div>
      <div className="texto">
        <p className="nivel-texto">Nivel:</p>
        <p className="nivel-descripcion">{nivelesDescripcionMap[nivel]}</p>
      </div>
    </div>
  );
};

export default Herramienta;
