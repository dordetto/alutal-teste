import React, { Component } from "react";
import Menu from "../component/Menu";
import "./styles.css";

export default class UpdateProduct extends Component {
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
    const response = await fetch("http://localhost:3003/product/1");
    const data = await response.json();
    this.setState({ items: data });

    console.log(data);
    console.log(this.state);
  }

  render() {
    return (<div>
        <Menu />
        <label className="title">Produtos</label>
             <ul>
          {this.state.items.map(item => (
            <li key={item.name}>
              Nome: {item.name} Preço: {item.price} Código: {item.barcode}
              <button className="edit">editar</button>
            </li>
          ))}
        </ul>
    </div>);
  }
}
