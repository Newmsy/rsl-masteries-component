import logo from "./logo.svg";
import "./App.css";
import { MasteryTree } from "./MasteryTree";
import { ShardCalculator } from "./ShardCalc";

function App() {
  return (
    <div className="App" style={{ width: "100%", display: "flex", justifyContent: "center", paddingTop: 100 }}>
      <ShardCalculator />
    </div>
  );
}

export default App;
