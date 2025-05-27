import React from "react";

/**
 * Componente creado por Wilson Arevalos, estudiante de Ingeniería en Informática.
 * Muestra el Teorema de Pitágoras y realiza un cálculo simple.
 */
const WilsonComponent: React.FC = () => {
  const a = 5;
  const b = 12;
  const c = Math.sqrt(a * a + b * b); // Teorema de Pitágoras

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <h2>Teorema de Pitágoras</h2>
      <p>
        Fórmula: <strong>c² = a² + b²</strong>
      </p>
      <p>
        Con a = {a} y b = {b}, entonces:
        <br />
        c = √({a}² + {b}²) = √({a * a} + {b * b}) = <strong>{c.toFixed(2)}</strong>
      </p>
      <p style={{ marginTop: "1rem", fontStyle: "italic", color: "gray" }}>
        Componente hecho por Wilson Arevalos – Ing. en Informática
      </p>
    </div>
  );
};

export default WilsonComponent;
