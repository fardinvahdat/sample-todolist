import { useAuthStore } from "../stores/auth";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import NoteView from "../views/NoteView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/note-list",
      name: "note",
      component: NoteView,
    },
  ],
});
router.beforeEach(async (to, from) => {
  const store = useAuthStore();
  if (!store.auth && to.name !== "login") {
    return { name: "login" };
  }
});
export default router;
