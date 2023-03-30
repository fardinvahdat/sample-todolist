<template>
  <section
    class="login-template d-flex align-items-center justify-content-center"
  >
    <form class="login" @submit.prevent="loginHandler">
      <input type="text" v-model="login.username" placeholder="نام کاربری" />
      <input type="password" v-model="login.password" placeholder="کلمه عبور" />
      <button
        class=""
        type="submit"
        :disabled="login.username === '' || login.password === ''"
      >
        ورود
      </button>
    </form>
  </section>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const authStore = useAuthStore();
const router = useRouter();
const login = ref({
  username: "12345678910",
  password: "123456",
});
const loginHandler = () => {
  const headers = {
    "api-version": "1",
    "x-api-key": "676bdb1ce2d84276b8874a41f143c739",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTZWNyZXRLZXkiOiIxMDQwOTIyMjQ2IiwiRW1haWwiOiIiLCJMYXN0TmFtZSI6Itqp2KfYsdio2LHbjNin2YYiLCJVc2VybmFtZSI6IjEyMzQ1Njc4OTEwIiwiRmlyc3ROYW1lIjoi2qnYp9ix2KjYsSIsIk1vYmlsZU51bWJlciI6IjA5MTIwMDAwMDAwIiwibmFtZWlkIjoiNjkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjA5MTIwMDAwMDAwIiwiT3BlcmF0aW9uVW5pdElkIjoiMTAyMiIsIkRpc3BsYXlOYW1lIjoi2qnYp9ix2KjYsSDaqdin2LHYqNix24zYp9mGIiwianRpIjoiZDg2MWQ0ZDktNTgzMy00ZWUyLTgzMjQtZTg2ODQ0MDI5N2JiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6IjE4NS4xMC43My43NyIsIkxhc3RMb2dpbkRhdGVVdGMiOiIxNDAyLzAxLzEwIDAxOjM4OjQ3INi12KjYrSIsIk9wZXJhdGlvblVuaVBhcmVudElkIjoiIiwibmJmIjoxNjgwMTQwMzI3LCJleHAiOjE2ODAyMjY3MjcsImlhdCI6MTY4MDE0MDMyN30.ivyv0YxrrAyUK2EMb9A-njCnk72LxgYdgd1ImXnMy6g",
  };
  axios
    .post("http://vti.tadbirkish.com/api/Account/login", login.value, {
      headers: headers,
    })
    .then((response) => {
      if (response.status == 200) authStore.auth = true;
      router.push("/");
      axios
        .get("http://vti.tadbirkish.com/api/user/my-profile", {
          headers: headers,
        })
        .then((res) => {
          authStore.user = res.data.FullName;
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>