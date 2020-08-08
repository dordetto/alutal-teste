import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import "./styles.css";

export default class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch("http://localhost:3003/product");
    const data = await response.json();
    this.setState({ items: data });
  }

  render() {
    return (
      <div className="container">
        <Menu />
        <label className="title">Produtos</label>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.name}>
              Nome: {item.name} Preço: {item.price} Código: {item.barcode}
              <Link to={`/update/${item.id}`}>Alterar</Link>
              <Link to={`/delete/${item.id}`}>Excluir</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
