import { useEffect, useState } from "react";
import { Contenedor, Heading, Imagen } from "./styles.app";
import imagen from "./assets/cryptomonedas.png";
import Formulario from "./components/Formulario";
import axios from "axios";
import Cotizacion from "./components/Cotizacion";
import Spinner from "./components/Spinner";

function App() {
  const [monedaSeleccionada, setMonedaSeleccionada] = useState("");
  const [criptoSeleccionada, setCriptoSeleccionada] = useState("");
  const [resultado, setResultado] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //evitamos la ejecucion la primera vez
    if (monedaSeleccionada === "" || criptoSeleccionada === "") {
      return;
    }
    //consultar API para obtener cotizacion
    const cotizarCriptomoneda = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoSeleccionada}&tsyms=${monedaSeleccionada}`;
      const resultado = await axios.get(url);
      //mostrar spinner
      setLoading(true);
      //ocultar spinner y mostrar resultado
      setTimeout(() => {
        //cambiar state de loading
        setLoading(false);
        //guardar cotizacion
        setResultado(
          resultado.data.DISPLAY[criptoSeleccionada][monedaSeleccionada]
        );
      }, 2000);
    };
    cotizarCriptomoneda();
  }, [monedaSeleccionada, criptoSeleccionada]);
  //Mostrar spinner o resultado
  const ResultadoCotizacion = loading ? (
    <Spinner></Spinner>
  ) : (
    <Cotizacion cotizacion={resultado} />
  );

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="imagen cripto" />
      </div>
      <div>
        <Heading>Cotizador Criptomonedas</Heading>
        <Formulario
          monedaSeleccionada={setMonedaSeleccionada}
          criptoSeleccionada={setCriptoSeleccionada}
        />
        {ResultadoCotizacion}
      </div>
    </Contenedor>
  );
}

export default App;
