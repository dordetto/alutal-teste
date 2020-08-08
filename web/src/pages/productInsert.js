import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import api from "../services/api";
import Menu from "../components/Menu";
import PopupAlert from "../components/PopupAlert";

export default function InsertProduct() {
  const { register, handleSubmit, reset } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await api.post(`/product`, data);
      PopupAlert();
      reset(response);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  function handleBack() {
    history.push("/");
  }

  return (
    <div>
      <Menu />
      <div className="form-geral">
        <h1>Cadastro de Produto</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="label-float">
            <input name="name" placeholder=" " ref={register} />
            <label>Nome</label>
          </div>

          <div className="label-float">
            <input name="price" placeholder=" " ref={register} />
            <label>Preço</label>
          </div>

          <div className="label-float">
            <input name="barcode" placeholder=" " ref={register} />
            <label>Código de Barras</label>
          </div>
          <div className="action">
            <button type="submit">Salvar</button>
            <button onClick={handleBack}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
