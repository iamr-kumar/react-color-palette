import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Palette from "./Components/Palette/Palette";
import PaletteList from "./Components/Palette/PaletteList";
import { generatePalette } from "./utils/colorHelper";
import seedColors from "./seedColors";

const App = () => {
  const findPalette = (id) => {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <PaletteList palettes={seedColors} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
