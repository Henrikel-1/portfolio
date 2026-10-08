import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";
import styles from "./Reveal.module.css";

interface RevealProps {
  children: ReactNode;
}

function Reveal({ children }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={isInView ? `${styles.reveal} ${styles.visible}` : styles.reveal}
    >
      {children}
    </div>
  );
}

export default Reveal;