import { useState, type ChangeEvent } from 'react';

interface RuleOfThreeValues {
  a: string;
  b: string;
  c: string;
  x: string;
}

function RuleOfThreeCalculator() {
  const [values, setValues] = useState<RuleOfThreeValues>({
    a: '',
    b: '',
    c: '',
    x: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculate = () => {
    const { a, b, c } = values;
    if (a && b && c) {
      const numA = parseFloat(a);
      const numB = parseFloat(b);
      const numC = parseFloat(c);
      
      // Validación adicional para evitar NaN
      if (!isNaN(numA) && !isNaN(numB) && !isNaN(numC)) {
        const result = (numB * numC) / numA;
        setValues(prev => ({
          ...prev,
          x: result.toFixed(2)
        }));
      }
    }
  };

  return (
    <div className="calculator-container">
      <h2>Calculadora de Regla de Tres</h2>
      <div className="input-group">
        <label>A:</label>
        <input 
          type="number" 
          name="a" 
          value={values.a} 
          onChange={handleChange} 
          placeholder="Primer valor" 
        />
      </div>
      <div className="input-group">
        <label>B:</label>
        <input 
          type="number" 
          name="b" 
          value={values.b} 
          onChange={handleChange} 
          placeholder="Segundo valor" 
        />
      </div>
      <div className="input-group">
        <label>C:</label>
        <input 
          type="number" 
          name="c" 
          value={values.c} 
          onChange={handleChange} 
          placeholder="Tercer valor" 
        />
      </div>
      <button onClick={calculate}>Calcular X</button>
      {values.x && (
        <div className="result">
          <h3>Resultado (X): {values.x}</h3>
          <p>Fórmula: (B × C) / A = X</p>
          <p>({values.b} × {values.c}) / {values.a} = {values.x}</p>
        </div>
      )}
    </div>
  );
}

export default RuleOfThreeCalculator;