<template>
    <div id="containers" >
      <div id="type" v-for="(type, idx) in listTypes" :key="idx" >
        <router-link
          style="text-decoration: none"
          :to="{ name: 'PokemonByType', params: { type: type } }">
          <Card :pokeType="type"></Card>
        </router-link>
      </div>
    </div>
</template>

<script>
import PokemonServices from "@/services/PokemonServices";
import Card from "@/components/Card";

export default {
  name: "PokemonList",
  data() {
    return {
      listTypes: [],
    };
  },
  components: {
    Card,
  },
  mounted() {
    PokemonServices.listType()
      .then((types) => {
        this.listTypes = types;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style >
#containers {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 50px;

}
</style>