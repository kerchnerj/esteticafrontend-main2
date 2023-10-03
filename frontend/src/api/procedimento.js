import axios from "axios";

class procApi {
  async buscarTodosOsProcedimentos() {
    const response = await axios.get(
      "https://estetica-5wdm-dev.fl0.io/api/procedimento/"
    );
    return response.data;
  }

  async salvarProcedimento(procedimento) {
    let response;
    if (procedimento.id) {
      response = await axios.put(
        `https://estetica-5wdm-dev.fl0.io/api/procedimento/${procedimento.id}/`,
        procedimento
      );
    } else {
      response = await axios.post(
        "https://estetica-5wdm-dev.fl0.io/api/procedimento/",
        procedimento
      );
    }
    return response.data;
  }

  async excluirProcedimento(id) {
    const response = await axios.delete(
      `https://estetica-5wdm-dev.fl0.io/api/procedimento/${id}/`
    );
    return response.data;
  }
}

export default new procApi();
