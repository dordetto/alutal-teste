import swal from "sweetalert";

function PopupAlert(mensagem = "Sucesso", tipoAlerta = "success") {
  swal(mensagem, {
    icon: tipoAlerta,
    buttons: {
      cancel: false,
      confirm: true,
    },
    timer: 5000,
  });
}

export default PopupAlert;
