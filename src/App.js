import logo from './logo.svg';
import './App.css';
import FormComponent from './FormComponent';

function App() {

  const input = require('./input.json');
  
  return (
    <div className="App">
      <FormComponent input={input} />

    </div>
  );
}

export default App;
