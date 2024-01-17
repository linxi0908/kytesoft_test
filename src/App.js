
import './App.css';
import { AppProvider } from "./AppContext";
import Header from './components/header/Header';
import Sidebar from "./components/sidebar/Sidebar";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <Sidebar />
        <Slider/>
      </AppProvider>
    </div>
  );
}

export default App;
