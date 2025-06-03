import React from 'react';

interface Props {
  frecuencia: number; // en Hz
  capacitancia: number; // en faradios
}

function ArecoComponent({ frecuencia, capacitancia }: Props) {
  const reactancia = 1 / (2 * Math.PI * frecuencia * capacitancia);

  return (
    <div className="text-black">
      La reactancia capacitiva es: {reactancia.toFixed(2)} Ω — soy Jorge Ronaldo Areco.
    </div>
  );
}

export default ArecoComponent;
