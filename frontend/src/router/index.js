import { createRouter, createWebHistory } from "vue-router";
import PacotesView from "../views/PacotesView.vue";
import AgendamentosView from "../views/AgendamentosView.vue";
import LoginView from "../views/LoginView.vue";
import ProcedView from "../views/ProcedView.vue";
import ClientesView from "../views/ClientesView.vue";
import MainView from "../views/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-redirect",
      redirect: "/login",
    },
    {
      path: "/agendamentos",
      name: "agendamentos",
      component: AgendamentosView,
    },
    {
      path: "/homeview",
      name: "home",
      component: MainView,
    },

    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/pacotes",
      name: "pacotes",
      component: PacotesView,
    },
    {
      path: "/procedimentos",
      name: "procedimentos",
      component: ProcedView,
    },
    {
      path: "/clientes",
      name: "clientes",
      component: ClientesView,
    },
    {
      path: "/admgeral",
      name: "admgeral",
      component: MainView,
    },
  ],
});

export default router;
