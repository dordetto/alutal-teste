import React from "react";

import Menu from "../components/Menu";
import "./styles.css";

function Main() {
  return (
    <div className="container">
      <Menu />
      <h1>Bem Vindo! CRUD de apresentação</h1>
      <h2>É necessário o NodeJS rodando no Backend na porta 3003</h2>
      <h2>Navege pelos Menus para ligar os produtos</h2>)
    </div>
  );
}

export default Main;
