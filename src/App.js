import './App.css';
import Calculations from './components/Calculations/Calculations';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <h1 className='navbar'>Weight Lifting</h1>
      <h4 className='exercise-list'>Select today's exercise</h4>
      <Home></Home>
      <Calculations></Calculations>
    </div>
  );
}

export default App;
