import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const auth = ref(false);
  const user = ref(null);
  if (localStorage.getItem("isAuthenticated")) {
    auth.value = JSON.parse(localStorage.getItem("isAuthenticated"));
    user.value = localStorage.getItem("user");
  }
  watch(
    auth,
    (authValue) => {
      localStorage.setItem("isAuthenticated", authValue);
    },
    {
      deep: true,
    }
  );
  watch(
    user,
    (userValue) => {
      localStorage.setItem("user", userValue);
    },
    {
      deep: true,
    }
  );
  return { auth, user };
});
