import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SimpleCounter from "./components/SimpleCounter";
import "./assests/custom.scss";
import FunctionalCounter from "./components/FunctionalCounter";
import ReduxCounter from "./components/ReduxCounter";

function App() {
  return (
    <div className="App">
      {/* <SimpleCounter /> */}
      {/* <FunctionalCounter /> */}
      <ReduxCounter />
    </div>
  );
}

export default App;
