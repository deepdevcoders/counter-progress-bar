import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SimpleCounter from "./components/SimpleCounter";
import "./assests/custom.scss";
import FunctionalCounter from "./components/FunctionalCounter";

function App() {
  return (
    <div className="App">
      {/* <SimpleCounter /> */}
      <FunctionalCounter />
    </div>
  );
}

export default App;
