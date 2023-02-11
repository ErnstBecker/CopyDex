<script setup>
import { RouterLink, RouterView } from "vue-router";
import Logo from "../src/components/LogoPokemon.vue";
</script>

<template>
  <!-- Logo clicável para retornar ao "Home" (/) -->
  <Logo />
  <!-- Visualização das páginas utulizando o "Router"-->
  <Router-view />
</template>

<script></script>

<style>
body {
  background: url(/src/assets/images/background.png);
}
</style>
