import axios from "axios";

class agenApi {
  async buscarTodosOsAgendamentos() {
    const response = await axios.get(
      "https://estetica-5wdm-dev.fl0.io/api/agendamento/"
    );
    return response.data;
  }

  async salvarAgendamento(agendamento) {
    // Corrected method name
    let response;
    if (agendamento.id) {
      response = await axios.put(
        `https://estetica-5wdm-dev.fl0.io/api/agendamento/${agendamento.id}/`,
        agendamento
      );
    } else {
      response = await axios.post(
        "https://estetica-5wdm-dev.fl0.io/api/agendamento/",
        agendamento
      );
    }
    return response.data;
  }

  async excluirAgendamento(id) {
    const response = await axios.delete(
      `https://estetica-5wdm-dev.fl0.io/api/agendamento/${id}/`
    );
    return response.data;
  }
}

export default new agenApi();
