import React, { useState } from "react";
import api from "../services/api";
import Menu from "../component/Menu";
import './styles.css'

async function ProductList() {
//  const [products, setProducts] = useState([]);

  const response = await api.get("product");
  const products = response.data
  //setProducts(response.data);
  //}

  // async function searchProducts() {
  //   const response = await api.get("product");
  //   setProducts(response.data);
  // }

  //searchProducts();

  return (
    <div>
      <Menu />
      <div className="titulo">Produtos</div>

      {products.map((product) => (
      <div id="product-list" className="product-list">
        <div className="label">ID: {product.id}</div>
        <div className="label">Nome:{product.name}</div>
        <div className="label">Preço:{product.price}</div>
        <div className="label">Código de Barras:{product.barcode}</div>
      </div>
      ))}
    </div>
  );
}

export default ProductList;
