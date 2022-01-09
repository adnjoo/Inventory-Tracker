import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  let [result, setResult] = useState("");

  useEffect(() => {
    search();
  }, []);

  //search for artist
  const search = async () => {
    const res = await axios.get(`http://localhost:4001`);
    console.log("results", res.data);
    setResult(res.data);
  };

  return (
    <div className="App">
      hi here's a :<br />
      {result}
    </div>
  );
}

export default App;
