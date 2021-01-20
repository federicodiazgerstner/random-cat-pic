import {useState, useEffect} from "react";

function App() {

  const [data, setData] = useState({});
  const [loadings , setLoading] = useState(true);

  useEffect(() => {
    fetchData()
  }, [] );



  async function fetchData() {
    const getData = await fetch("https://api.thecatapi.com/v1/images/search")

    const json = await getData.json()

    setData(json[0].url);
    setLoading(false);
  }

  return (
    <>{loadings == true ? (
    <p>Cargando</p>) : 
    (<>
      <img src={data} alt="cat image" />
      <br />
      <button onClick={fetchData}>Ver otra imagen</button>
    </>)}
    </>
  )
}

export default App;