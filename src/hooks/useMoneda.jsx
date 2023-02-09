import React, { useState } from "react";
import { ContainerInput, Label, Select } from "../components/stylesFormulario";
const useMoneda = (labels, stateInicial, opciones) => {
  const [state, setState] = useState(stateInicial);
  const handleChange = (e) => {
    setState(e.target.value);
  };
  const SelectsMap = () => {
    return (
      <ContainerInput>
        <Label>{labels}</Label>
        <Select value={state} onChange={(e) => handleChange(e)}>
          <option>Seleccione</option>
          {opciones.map((option) => (
            <option
              key={option.codigo}
              value={option.codigo}
              name={option.nombre}
            >
              {option.nombre}
            </option>
          ))}
        </Select>
      </ContainerInput>
    );
  };
  return [state, SelectsMap, setState];
};

export default useMoneda;
