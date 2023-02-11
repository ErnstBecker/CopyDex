<template>
  <header class="homePage">
    <h1 class="title">Welcome to my pokedex!!</h1>
    <p class="text">Click below to start searching pokémons informations</p>
    <router-link class="routerSearch" to="/search">Search Pokémon</router-link>
  </header>
</template>

<style>
.homePage {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: baseline;
  justify-content: center;
  text-align: center;
  background-color: aliceblue;
  border-radius: 1rem;
  padding: 2rem;
  width: auto;
  height: auto;
}
.title {
  font-weight: 700;
  padding: 0rem;
}

.text {
  padding: 1rem;
}

.routerSearch {
  font-weight: 600;
  font-size: larger;
}
</style>
