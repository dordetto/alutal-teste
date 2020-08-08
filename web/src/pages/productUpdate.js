import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Menu from "../components/Menu";

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
      <div>
        <Menu />
        {this.state.items.map((item) => (
          <form>
            <input
              type="text"
              placeholder="Last name"
              name="name"
              onChange={this.handleChange}
              defaultValue={item.name}
            />
            <input
              type="number"
              placeholder=" "
              name="price"
              onChange={this.handleChange}
              defaultValue={item.price}
            />
            <input
              type="number"
              placeholder=" "
              name="barcode"
              onChange={this.handleChange}
              defaultValue={item.barcode}
            />
            <Link to="/list">
              <button
                type="submit"
                variant="outline-dark"
                onClick={this.editToList}
              >
                Salvar
              </button>
            </Link>
          </form>
        ))}
      </div>
    );
  }
}
export default UpdateProduct;
