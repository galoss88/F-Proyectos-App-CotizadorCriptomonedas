import React, { useEffect, useState } from "react";
import { Boton } from "./stylesFormulario";
import useMoneda from "../hooks/useMoneda.jsx";
import useCriptomoneda from "../hooks/useCriptomoneda.jsx";
import axios from "axios";
import Error from "./Error";
const Formulario = ({ monedaSeleccionada, criptoSeleccionada }) => {
  const [criptos, setCriptos] = useState([]);
  const options = [
    {
      codigo: "USD",
      nombre: "Dolar estadounidense",
    },
    {
      codigo: "MXN",
      nombre: "Peso Mexicano",
    },
    {
      codigo: "EUR",
      nombre: "Euro",
    },
    {
      codigo: "GBP",
      nombre: "Libra Esterlina",
    },
    {
      codigo: "ARS",
      nombre: "Peso Argentino",
    },
  ];
  const [moneda, SelectMoneda] = useMoneda("Moneda", {}, options);
  const [criptomoneda, SelectCripto] = useCriptomoneda(
    "Criptomoneda",
    "",
    criptos
  );
  const [error, setError] = useState(false);
  //ejecutar llamada a API
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const api = await axios.get(url);
      const data = api.data;
      setCriptos(data.Data);
    };
    consultarAPI();
  }, []);

  const cotizarMoneda = (e) => {
    e.preventDefault();
    //validacion si campos estan llenos
    if (moneda === "" || criptomoneda === "") {
      setError(true);
      return;
    }
    setError(false);
    criptoSeleccionada(criptomoneda)
    monedaSeleccionada(moneda)
  };
  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje={"Todos los campos son obligatorios"} /> : null}
      {/* //INPUT ELEGIR MONEDA */}
      <SelectMoneda />
      {/* //INPUT ELEGIR CRIPTOMONEDA */}
      <SelectCripto />
      <Boton type="submit" value="calcular">
        Calcular
      </Boton>
    </form>
  );
};

export default Formulario;
