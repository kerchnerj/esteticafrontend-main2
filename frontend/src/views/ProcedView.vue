<script>
import { ref, onMounted } from "vue";
import procApi from "../api/procedimento";

export default {
  setup() {
    const form = ref({
      nome: "",
      descricao: "",
      status: "",
      preco: "",
    });

    const procedimentos = ref([]);

    const load = async () => {
      try {
        const [procedimentosResponse] = await Promise.all([
          procApi.buscarTodosOsProcedimentos(),
        ]);

        procedimentos.value = procedimentosResponse;
      } catch (error) {
        console.error(error);
      }
    };

    const add = async () => {
      await procApi.salvarProcedimentos(form.value);

      Object.assign(form.value, {
        id: "",
        nome: "",
        descricao: "",
        status: "",
        preco: "",
      });
      load();
    };

    const excluir = async (procedimento) => {
      await procApi.excluirProcedimento(procedimento.id);
      this.procedimentos = await procApi.buscarTodosOsProcedimentos();
    };

    const editar = (procedimento) => {
      Object.assign(form.value, procedimento);
    };

    onMounted(() => {
      load();
    });

    return {
      form,
      procedimentos,
      add,
      excluir,
      editar,
    };
  },
};
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h1>Procedimentos</h1>
      </div>
      <div class="form-input">
        <form @submit.prevent="add" class="center_input">
          <input
            id="input_tit"
            v-model="form.nome"
            type="text"
            placeholder="Nome"
          />
          <input
            id="input_tit"
            v-model="form.descricao"
            type="text"
            placeholder="Descrição"
          />
          <input
            id="input_quant"
            v-model="form.status"
            type="text"
            placeholder="Status"
          />
          <input
            id="input_pre"
            v-model="form.preco"
            type="number"
            placeholder="Preço"
          />
          <div class="center">
            <button @click="add">Salvar</button>
          </div>
        </form>
      </div>
      <div class="list-livros">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Status</th>
              <th>Preço</th>
              <th>Manutenção</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="procedimento in procedimentos" :key="procedimento.id">
              <td>{{ procedimento.id }}</td>
              <td>{{ procedimento.nome }}</td>
              <td>{{ procedimento.descricao }}</td>
              <td>{{ procedimento.status }}</td>
              <td>{{ procedimento.preco }}</td>
              <td>
                <button @click="editar(procedimento)">editar</button>
                <button @click="excluir(procedimento)">excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
<style></style>
