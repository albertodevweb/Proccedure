import React from "react";
import ListaDeUsuarios from "./ListaDeUsuarios";

const usuariosExemplo = [
  { nome: "João Silva", email: "joao@email.com" },
  { nome: "Maria Souza", email: "maria@email.com" },
  { nome: "Carlos Oliveira", email: "carlos@email.com" },
];

function App() {
  return (
    <div>
      <ListaDeUsuarios usuarios={usuariosExemplo} />
    </div>
  );
}

export default App;
