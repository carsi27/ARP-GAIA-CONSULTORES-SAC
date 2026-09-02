import type { Metadata } from "next";
import { AplicativoDemo } from "./AplicativoDemo";

export const metadata: Metadata = {
  title: "Clasificador de proyectos ambientales",
  description: "Prototipo institucional para clasificar, priorizar y dar seguimiento a proyectos ambientales en Perú.",
};

export default function AplicativoPage() {
  return <AplicativoDemo />;
}
