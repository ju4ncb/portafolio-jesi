import { motion } from "framer-motion";
import { LucideProps } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface TagCloudProps {
  roles: {
    role: string;
    RoleIcon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
  }[];
}

type Position = { top: number; left: number; width: number; height: number };

const TagCloud = ({ roles }: TagCloudProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<{ top: number; left: number }[]>(
    []
  );
  function isColliding(a: Position, b: Position) {
    const container = containerRef.current;
    if (!container) return;
    const { width, height } = container.getBoundingClientRect();
    console.log((a.left / 100) * width);
    return !(
      (a.left / 100) * width + a.width < (b.left / 100) * width ||
      (a.left / 100) * width > (b.left / 100) * width + b.width ||
      (a.top / 100) * height + a.height < (b.top / 100) * height ||
      (a.top / 100) * height > (b.top / 100) * height + b.height
    );
  }
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tagDims: Position[] = [];
    const newPositions: { top: number; left: number }[] = [];

    roles.forEach((_) => {
      let attempt = 0;
      let maxAttempts = 100;
      let pos: Position;

      do {
        const top = Math.random() * 100;
        const left = Math.random() * 100;

        const width = 130; // estimated tag width
        const height = 60; // estimated tag height

        pos = { top, left, width, height };
        attempt++;
      } while (
        tagDims.some((p) => isColliding(p, pos)) &&
        attempt < maxAttempts
      );

      tagDims.push(pos);
      newPositions.push({ top: pos.top, left: pos.left });
    });

    setPositions(newPositions);
  }, []);

  return (
    <div className="tag-cloud-container">
      <div className="tag-cloud" ref={containerRef}>
        {roles.map(({ role, RoleIcon }, i) => {
          const pos = positions[i];
          if (!pos) return null;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="tag-wrapper"
              style={{ top: `${pos.top}%`, left: `${pos.left}%` }}
            >
              <div className="tag">
                <RoleIcon />
              </div>
              <span className="tooltip">{role}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TagCloud;
