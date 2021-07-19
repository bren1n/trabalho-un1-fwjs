import Card from './Card'
import './App.css';

function App() {
  let options = [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}]
  let title = 'Isso é um projeto React?'
  let state = 'open'

  return (
    <div>
      <Card options={options} title={title} state={state}/>
    </div>
  );
}

export default App;
