import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [rate, setRate] = useState(50);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        console.log("User location data:", data);
        setUserData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleClick = () => {
    console.log(rate);
    console.log(userData);
    if (rate < 99) {
      window.alert("Bah Nique ta mère alors : " + userData.ip + " t'habite a " + userData.city);
    } else {
      window.alert("Bien vu fro");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>BITEEEEEEEEE</h1>
        <p>A combien notez vous notre site web ?</p>
        <input
          type="range"
          min="1"
          max="100"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <button onClick={handleClick}>Valider</button>
        <p>Note: {rate}</p>
      </header>
    </div>
  );
}


export default App;
