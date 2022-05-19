import "./App.css";
import { PlayButton } from "./PlayButton";
import { RangeDemo } from "./RangeDemo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RangeDemo />
        <PlayButton/>
      </header>
    </div>
  );
}

export default App;
