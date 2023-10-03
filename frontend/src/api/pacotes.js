import axios from "axios";

class pacApi {
  async buscarTodosOsPacote() {
    const response = await axios.get(
      "https://estetica-5wdm-dev.fl0.io/api/pacote/"
    );
    return response.data;
  }

  async salvarPacote(pacote) {
    let response;
    if (pacote.id) {
      response = await axios.put(
        `https://estetica-5wdm-dev.fl0.io/api/pacote/${pacote.id}/`,
        pacote
      );
    } else {
      response = await axios.post(
        "https://estetica-5wdm-dev.fl0.io/api/pacote/",
        pacote
      );
    }
    return response.data;
  }

  async excluirPacote(id) {
    const response = await axios.delete(
      `https://estetica-5wdm-dev.fl0.io/api/pacote/${id}/`
    );
    return response.data;
  }
}

export default new pacApi();
