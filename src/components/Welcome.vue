<template>
  <div class="card-body justify-content-center">
    <h1>{{ msg }}</h1>
    <h2>Te elijo a ti!</h2>
    <p>Encuentra a tu pokemon</p>
    <Loginform></Loginform>
  </div>
</template>

<script>
import Loginform from "@/components/Loginform.vue";
export default {
  name: "Welcome",
  props: {
    msg: String,
  },
  components: {
    Loginform,
  },
};
</script>


<style scoped lang="scss">
h2 {
  margin: 20px 0 40px 0;
  color: rgb(243, 183, 72);
}
h1 {
  background-color: rgb(243, 183, 72);
  padding: 10px;
  border-radius: 10px;
  width: 300px;
  border: 1px solid yellow;
  margin: auto;
}
</style>
