<template>
  <div id="carta">
   <img id="img-card"  src="../assets/pokeball.png">
   <p id="text" class="text-warning">{{textCapitalize}}</p>
  </div>
</template>

<script>

export default {
  name: "Card",
  props: {
    pokeType: String
  },
  computed: {
    textCapitalize() {
      return `${this.pokeType.substring(0,1).toUpperCase()}${this.pokeType.substring(1)}`
    }
  },
  
}
</script>

<style >
#img-card {
  width: 50px;
  margin: 0 auto
}
#carta {
 background:#d62222;
  border-radius:14px;
  border-bottom: 30px solid black;
  right:30px;
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
#text {
  margin-top: 20px;
  font-size: 1.2rem;
  /* text-transform: uppercase; */
}
</style>