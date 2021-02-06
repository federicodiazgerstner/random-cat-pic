import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [loadings, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getData = await fetch("https://api.thecatapi.com/v1/images/search");

    const json = await getData.json();

    setData(json[0].url);
    setLoading(false);
  }

  return (
    <>
      {loadings == true ? (
        <p>Cargando</p>
      ) : (
        <>
          <div className="container">
            <div className="title-container">
              <h1 className="title">GATITOS RANDOM PARA ALEGRAR TU DÍA!</h1>
            </div>
            <img className="img" src={data} alt="cat image" />
            <br />
            <div className="button-container">
              <button className="button" onClick={fetchData}>
                Ver otra imagen
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
