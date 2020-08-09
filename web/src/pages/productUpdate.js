import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Menu from "../components/Menu";
import "./styles.css";

class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  editToList = () => {
    axios
      .put(
        `http://localhost:3003/product/${this.props.match.params.id}`,
        this.state
      )
      .then(console.log("Produto Atualizado"));
  };

  async componentDidMount() {
    const response = await fetch(
      `http://localhost:3003/product/${this.props.match.params.id}`
    );
    const data = await response.json();
    this.setState({ items: data });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
              type="number"
              placeholder=" "
              name="barcode"
              onChange={this.handleChange}
              defaultValue={item.barcode}
            />
            <label>Cód. Barras</label>
            </div>

            <Link to="/list">
              <button
                type="submit"
                variant="outline-dark"
                onClick={this.editToList}
                className='button-action'
              >
                Salvar
              </button>
            </Link>
            <Link to="/list" className="button-action">
            Cancelar
          </Link>
          </form>
        ))}
      </div>
    );
  }
}
export default UpdateProduct;
