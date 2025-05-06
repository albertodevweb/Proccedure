import React, { useState } from "react";
import "./ListaDeUsuarios.css"; // 👈 Importação do CSS

const ListaDeUsuarios = ({ usuarios }) => {
  const [termoBusca, setTermoBusca] = useState("");

  const usuariosFiltrados = usuarios.filter((usuario) =>
    `${usuario.nome} ${usuario.email}`
      .toLowerCase()
      .includes(termoBusca.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Lista de Usuários</h2>
      <input
        type="text"
        placeholder="Buscar por nome ou e-mail..."
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
      />
      <ul>
        {usuariosFiltrados.map((usuario, index) => (
          <li key={index}>
            <strong>{usuario.nome}</strong> - {usuario.email}
          </li>
        ))}
        {usuariosFiltrados.length === 0 && <li>Nenhum usuário encontrado.</li>}
      </ul>
    </div>
  );
};

export default ListaDeUsuarios;
