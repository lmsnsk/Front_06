import { useState } from "react";
import "./App.css";
import Info from "./components/Info";
import Stopwatch from "./components/Stopwatch";

function App() {
  const [switcher, setSwitcher] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setSwitcher(1)}>Информация</button>
        <button onClick={() => setSwitcher(0)}>Секундомер</button>
      </header>
      {switcher ? <Info /> : <Stopwatch />}
    </div>
  );
}

export default App;
