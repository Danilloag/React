import { useRef, useState } from 'react';
import './App.css';

function App() {

  const nomeRef = useRef();
  const mailRef = useRef();
  const senhaRef = useRef();
  const [termoChecked, setTermosChecked] = useState(false);

  // const termosRef = useRef();


  function handlerSubmit(e) {
    if (!nomeRef.current.value || !mailRef.current.value || !senhaRef.current.value) {
      alert("Existem campos em branco")
    } else (
      alert("Cadastro realizado com sucesso")
    )
    e.preventDefault();
  }

  function handleTermosChecked() {
    setTermosChecked(!termoChecked)
  }

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <fieldset>
          <label>Nome</label>
          <input type="text" ref={nomeRef} />
          <br />
          <label>E-mail</label>
          <input type="email" ref={mailRef} />
          <br />
          <label>Senha</label>
          <input type="password" ref={senhaRef} />
          <br />
          <label>Aceitar os termos de uso</label>
          <input type="checkbox" onChange={handleTermosChecked}/>
          <br />
          <button
            type='submit'
            disabled={!termoChecked}
          >Inscrever</button>
        </fieldset>
      </form>
    </>
  );
}

export default App;
