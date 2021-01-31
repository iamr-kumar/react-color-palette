import "./App.css";
import Palette from "./Components/Palette/Palette";
import seedColors from "./seedColors";

const App = () => {
  return (
    <div className="App">
      <Palette palette={seedColors[4]} />
    </div>
  );
};

export default App;
