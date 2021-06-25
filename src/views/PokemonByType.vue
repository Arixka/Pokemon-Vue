<template>
<div id="containers" >
  <div class="">{{type}}</div>
  <div id="" v-for="(poke, idx) in pokemons" :key="idx">
    <div class="card-title ">{{poke.name}}</div>
  </div>

</div>

</template>

<script>
import PokemonServices from "@/services/PokemonServices";

export default {
  name: "PokemonByType",
  props: {
    type: String
  },
  data() {
    return {
      pokemons: []
    }
  },
  async mounted () {
    this.pokemons = await PokemonServices.pokemonsByType(this.type)
  },
}
</script>

<style>

</style>