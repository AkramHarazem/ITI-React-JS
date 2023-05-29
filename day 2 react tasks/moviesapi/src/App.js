import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';
import Slider from './components/slider';

function App() {
  return (
    <div className="container">
    <div className="row">
      <Movies></Movies>
      <Slider></Slider>
    </div>
    </div>

  );
}

export default App;
