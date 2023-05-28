import styles from './App.css'
import UserCard from './UserCard'

function App() {
  const users = [
    {
      nome: "Danillo",
      idade: 27,
      sexo: "masculino",
      isPremium: true
    },
    {
      nome: "Maria",
      idade: 19,
      sexo: "feminino",
      isPremium: false
    }
  ];

  return (
    <div className="AppBox">
      {users.map((user, i) => (
        <div key={i}><UserCard nome={user.nome} idade={user.idade} sexo={user.sexo} isPremium={user.isPremium} /></div>
      ))}
    </div>
  );
}

export default App;