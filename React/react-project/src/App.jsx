import Perfil from "./components/Perfil";
import Formulario from "./components/formulario";
import ReposList from "./components/RepoList";
import { useState } from "react";

// ciclo de vida no React
// quando é montado é mount
// quando é atualizado é update
// quanndo ele é desmontado onmount
function App() {
  const [ nomeUsuario, setNomeUsuario] = useState('');

  return(
    <>
      <input type="text" onBlur={({target}) => setNomeUsuario(target.value)} />
      
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario = {nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
      {/* <Formulario /> */}
    </>
  )
}

export default App
// https://api.github.com/users/danzSTK/repos