import axios from "axios";

class clieApi {
  async buscarTodosOsClientes() {
    const response = await axios.get(
      "https://estetica-5wdm-dev.fl0.io/api/cliente/"
    );
    return response.data;
  }

  async salvarClientes(cliente) {
    let response;
    if (cliente.id) {
      response = await axios.put(
        `https://estetica-5wdm-dev.fl0.io/api/cliente/${cliente.id}/`,
        cliente
      );
    } else {
      response = await axios.post(
        "https://estetica-5wdm-dev.fl0.io/api/cliente/",
        cliente
      );
    }
    return response.data;
  }

  async excluirclientes(id) {
    const response = await axios.delete(
      `https://estetica-5wdm-dev.fl0.io/api/cliente/${id}/`
    );
    return response.data;
  }
}

export default new clieApi();
