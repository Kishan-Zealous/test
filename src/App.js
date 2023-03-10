import './App.css';
import Navbar from './components/Navbar';
import RouterConfig from "./components/RouterConfig";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <RouterConfig />
      </main>
      Hello World!
    </div>
  );
}

export default App;
