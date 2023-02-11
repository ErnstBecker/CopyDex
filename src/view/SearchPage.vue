<template>
  <header class="searchBox">
    <!-- Aqui é a barra de navegação para que possa escolher seu pokemon -->
    <nav class="inputBox">
      <!-- O input vem recebe o valor e com o botão, é disparada a API para o
        recebimento das informações -->
      <input
        class="input"
        type="text"
        placeholder="Pokémon Name or ID"
        maxlength="100"
        v-model="pokemonID"
        @input="updateValue"
        @keyup.enter="searchPokemon"
      />
      <!-- O botão que ativa a disparada -->
      <button id="searchButton" class="searchButton">
        <img
          class="buttonImage"
          src="../assets/images/button.png"
          alt="ButtonImage"
          @click="searchPokemon"
        />
      </button>
    </nav>

    <span class="invisibleCard">
      <main
        class="typeTheme"
        :class="getPokemonType(pokemonInfo)"
        v-if="Object.entries(pokemonInfo).length > 0"
      >
        <img
          class="pokemonPicture"
          :src="pokemonInfo.sprites.front_default"
          :alt="pokemonInfo.name"
        />
        <!-- Aqui é a exibição do número de ID do Pokemon, eu acabei adicionando
        uma função para ele adicionar os zeros necessários -->
        <!-- <p class="pokemonNumber">N°: {{ addLeadingZeros(pokemonInfo.id) }}</p> -->
        <p class="pokemonNumber">N°: {{ addLeadingZeros(pokemonInfo.id) }}</p>
        <div class="pokemonInfoBox">
          <h1 class="pokemonName">
            {{ upperFirstChar(pokemonInfo.name) }}
          </h1>
          <!-- Aqui se cria uma li com span para que seja mostrada os tipos do
          pokémon. Como ele cria os tipos colocando uma classe com o nome
          default em inglês, pude adicionar cores usando CSS no arquivo
          typesPalette.css -->
          <div class="typeList">
            <li
              v-for="(type, index) in pokemonInfo.types"
              :key="index"
              :class="type.type.name"
              class="pokemonTypes"
            >
              <span>{{ type.type.name }}</span>
            </li>
          </div>
          <hr class="separator" :class="getPokemonType(pokemonInfo)" />
          <!-- Parte onde é criado uma lista com todos os tipos de "stats" e
            a quantidade que cada um tem de "base stats". Ele cria uma tag
            li e span para cada stats.   -->
          <div class="statsBox">
            <br />
            <h2 class="baseStats">Base Stats</h2>
            <ul class="statsList">
              <li v-for="(stat, index) in pokemonInfo.stats" :key="index">
                <span pokemonStats>
                  {{ stat.stat.name }} : {{ stat.base_stat }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </span>
  </header>
</template>

<script>
// Para que transforme o número de ID em números com 0 de mil (ex: 6 = 0006).
const addLeadingZeros = (num) => {
  const forThousand = 4;
  const numStr = num.toString();
  if (numStr.length >= forThousand) {
    return numStr;
  }
  return numStr.padStart(forThousand, "0");
};

/* Esse é para pegar o prímeiro dígito do nome do Pokémon e transformar
em maiúsculo. */
const upperFirstChar = (str) => {
  const firstCharacter = str.substr(0, 1).toUpperCase();
  const restOfString = str.substr(1);
  return firstCharacter + restOfString;
};

// Essa função pega o primeiro índice dos types do pokémon para pintar os
// elementos
function getPokemonType() {
  return this.pokemonInfo.types[0].type.name;
}

// Importando o Poke API
import { pokeapi } from "../api/pokeapi";

export default {
  name: "App",
  data() {
    return {
      /* As 2 informações necessárias para isso rodar. pokemonID é para entrar
      na url da API e fazer a pesquisa, e o pokemonInfo são as informações
      trazidas pelas API */
      pokemonInfo: {},
      pokemonID: "",
    };
  },
  methods: {
    updateValue(event) {
      this.pokemonID = event.target.value.toLowerCase();
    },
    // Ele abre a api, e insere o ID do Nome/ID do pokémon para fazer a pesquisa.
    async searchPokemon() {
      try {
        const pokemonToFind = await fetch(`${pokeapi}/${this.pokemonID}`);
        const pokemon = await pokemonToFind.json();
        this.pokemonInfo = pokemon;
        return pokemon;
      } catch (error) {
        alert("Pokémon not found!");
      }
    },
    addLeadingZeros,
    upperFirstChar,
    getPokemonType,
  },
};
</script>

<style></style>
