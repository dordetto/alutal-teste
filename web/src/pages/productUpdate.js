import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Menu from "../components/Menu";
import PopupAlert from "../components/PopupAlert";
import "./styles.css";

class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = () => {
    axios
      .put(
        `http://localhost:3003/product/${this.props.match.params.id}`,
        this.state
      )
      //.then(console.log("Produto Atualizado"));

    PopupAlert("Produto atualizado");
  };

  async componentDidMount() {
    const response = await fetch(
      `http://localhost:3003/product/${this.props.match.params.id}`
    );
    const data = await response.json();
    this.setState({ items: data });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <Menu />
        <h1>Alteração</h1>
        {this.state.items.map((item) => (
          <form>
            <div className="label-float">
              <input
                type="text"
                placeholder=" "
                name="name"
                maxLength="30"
                onChange={this.handleChange}
                defaultValue={item.name}
              />
              <label>Nome</label>
            </div>
            <div className="label-float">
              <input
                type="number"
                placeholder=" "
                name="price"
                onChange={this.handleChange}
                defaultValue={item.price}
              />
              <label>Preço</label>
            </div>
            <div className="label-float">
              <input
                type="text"
                placeholder=" "
                name="barcode"
                maxLength="11"
                onChange={this.handleChange}
                defaultValue={item.barcode}
              />
              <label>Cód. Barras</label>
            </div>

            <button
              type="submit"
              onClick={this.handleSubmit}
              className="button-action"
            >
              Salvar
            </button>
            <Link to="/list" className="button-action">
              Voltar
            </Link>
          </form>
        ))}
      </div>
    );
  }
}
export default UpdateProduct;
