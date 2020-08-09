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
        <h1>Produtos</h1>
        <ul id="product-list">
          {this.state.items.map((item) => (
            <li className="product-list" key={item.name}>
              <label className='itens'>Nome: </label>{item.name} <label className='itens'>Preço:</label>{item.price}<label className='itens'>Código:</label>{item.barcode}
              <div className="buttons">
                <Link to={`/update/${item.id}`} className="button-action">
                  Alterar
                </Link>
                <Link to={`/delete/${item.id}`} className="button-action">
                  Excluir
                </Link>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
