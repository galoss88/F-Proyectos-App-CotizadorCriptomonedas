import React, { useState } from "react";
import { ContainerInput, Label, Select } from "../components/stylesFormulario";
const useMoneda = (labels, stateInicial, opciones) => {
  const [criptomoneda, setCriptomoneda] = useState(stateInicial);
  const handleChange = (e) => {
    setCriptomoneda(e.target.value);
  };
  const SelectCripto = () => {
    return (
      <ContainerInput>
        <Label>{labels}</Label>
        <Select value={criptomoneda} onChange={(e) => handleChange(e)}>
          <option>Seleccione</option>
          {opciones.map((option) => (
            <option
              key={option.CoinInfo.Id}
              value={option.CoinInfo.Name}
              name={option.CoinInfo.FullName}
            >
              {option.CoinInfo.FullName}
            </option>
          ))}
        </Select>
      </ContainerInput>
    );
  };
  return [criptomoneda, SelectCripto, setCriptomoneda];
};

export default useMoneda;
