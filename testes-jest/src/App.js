import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([])
  const [tarefaTemp, setTarefaTemp] = useState('')

  function cadastrarTarefa() {
    setTarefas([...tarefas, tarefaTemp])
    setTarefaTemp('')
  }

  return (
    <div className="App">
      <input data-testid="campo-tarefa" type="text" value={tarefaTemp} onChange={({target}) => setTarefaTemp(target.value)}/>
      <button data-testid="btn-cadastrar" type="button" onClick={cadastrarTarefa}>cadastrar</button>

      <ul>
        {tarefas.map(tarefa => (
          <li>
            {tarefa}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
