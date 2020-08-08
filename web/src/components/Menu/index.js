import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => (
  <nav id="mainmenu">
    <ul>
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li>
        <Link to={`/list`}>Listar</Link>
      </li>
      <li>
        <Link to={`/insert`}>Cadastrar</Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
