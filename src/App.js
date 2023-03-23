import "./App.scss";
import Dashboard from "./components/Dashboard";
import background from "./assets/images/background.jpg";
import Top from "./components/TopBar";

function App() {
  return (
    <div className="bimg">
      <Top />
      <Dashboard />
    </div>
  );
}

export default App;
