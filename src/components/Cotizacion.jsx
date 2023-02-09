import React from "react";
import { Info, Precio, ResultadoDiv } from "./styles/stylesCotizacion";

const Cotizacion = ({ cotizacion }) => {
  if (Object.keys(cotizacion).length === 0) return null;
  console.log(cotizacion);

  return (
    <ResultadoDiv>
      <Precio>
        El precio es: <span>{cotizacion.PRICE}</span>
      </Precio>
      <Info>
        Precio mas alto del dia: <span>{cotizacion.HIGHDAY}</span>
      </Info>
      <Info>
        Precio mas bajo del dia: <span>{cotizacion.LOWDAY}</span>
      </Info>
      <Info>
        Variacion precio ultimas 24hs: <span>{cotizacion.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Ultima actualizacion: <span>{cotizacion.LASTUPDATE}</span>
      </Info>
    </ResultadoDiv>
  );
};

export default Cotizacion;
