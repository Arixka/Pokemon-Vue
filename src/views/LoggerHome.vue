<template>
  <div>
    <HeaderHome></HeaderHome>

    <PokemonList></PokemonList>
  </div>
</template>

<script>
import HeaderHome from "@/components/HeaderHome.vue"
import PokemonList from "@/components/PokemonList.vue"

export default {
  name: "LoggerHome",
  components: {
    HeaderHome,
    PokemonList
  }
}
</script>

<style>
</style>