<script setup>
import { useAuthStore } from "./stores/auth";
import { ref } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const logoutHandler = () => {
  authStore.auth=false;
  authStore.user=null
  router.push("/login");
};
</script>

<template>
  <header class="header">
    <div class="wrapper">
      <nav class="navigation">
        <div class="navigation-links d-flex">
          <RouterLink to="/">خانه</RouterLink>
          <RouterLink to="/note-list">یادداشت ها</RouterLink>
        </div>
        <div class="actions d-flex">
          <RouterLink to="/login" v-if="!authStore.auth"
            >ورود به حساب کاربری</RouterLink
          >
          <a
            href="javascript:void(0)"
            @click="logoutHandler"
            v-if="authStore.auth"
            >خروج از حساب کاربری | ({{authStore.user}})</a
          >
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
