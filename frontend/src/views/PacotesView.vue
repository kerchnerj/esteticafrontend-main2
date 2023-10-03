<script setup></script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h1>Pacotes</h1>
      </div>
      <div class="form-input">
        <div class="center_input">
          <input id="input_tit" type="text" placeholder="Nome" />
          <input id="input_tit" type="text" placeholder="Descrição" />
          <input id="input_quant" type="number" placeholder="Status" />
          <input id="input_pre" type="number" placeholder="Preço" />
          <div class="center">
            <button>Salvar</button>
          </div>
        </div>
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
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button>editar</button>
                <button>excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
<style></style>
