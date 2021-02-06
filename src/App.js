import "./App.css";
import Palette from "./Components/Palette/Palette";
import { generatePalette } from "./utils/colorHelper";
import seedColors from "./seedColors";

const App = () => {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
};

export default App;
