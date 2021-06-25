<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Welcome msg="Pokebook"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";

export default {
  name: "Home",
  components: {
    Welcome,
  }
}
</script>
