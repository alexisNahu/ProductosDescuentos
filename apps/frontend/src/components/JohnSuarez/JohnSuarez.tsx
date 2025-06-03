import React from 'react';

const JohnSuarez = () => {
  // Función recursiva con tipo de retorno declarado
  const factorial = (n: number): number => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  };

  return (
    <div className="p-4 bg-green-100 rounded-lg">
      <h1 className="text-xl font-bold">¡Hola, soy John Suarez!</h1>
      <p className="mt-2">Estudiante de desarrollo de software y apasionado por la tecnología.</p>
      <p className="mt-2">Aquí está el factorial de 5: {factorial(5)}</p>
    </div>
  );
};

export default JohnSuarez;

