import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import "./styles.css";

export default class DeleteProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  async componentDidMount() {
    // fetch with async/await
    this.idProduto = this.props.match.params.id;
    const response = await fetch(
      `http://localhost:3003/product/${this.idProduto}`
    );
    const data = await response.json();
    this.setState({ items: data });
  }

  render() {
    return (
      <div>
        <Menu />
        <label className="title">Produtos</label>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.name}>
              Nome: {item.name} Preço: {item.price} Código: {item.barcode}
              <Link to={`/delete`}>Cancelar</Link>
              <button onClick={this.handleDeleteConfirmed.bind(this)}>
                Confirmar
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  async handleDeleteConfirmed() {
    const response = await fetch(
      "http://localhost:3003/product/" + this.state.items[0].id,
      { method: "DELETE" }
    );
    const data = await response.json();
    console.log("Excluindo", data);
  }
}
