<template>
  <div id="login-form">
    <p>
      <input type="text" name="email" v-model="email" />
    </p>
    <p>
      <input type="password" name="pass" v-model="password" @keyup.enter="singup"/>
    </p>
    <p>
      <button @click="singup" class="btn btn-dark" id="btn">LOGIN</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Loginform",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    singup() {
      if (this.email === "ash@gmail.com" 
      && this.password === "2154") {
        this.$router.push({name: 'LoggerHome'}) 
      } else {
        window.alert("Email or password incorrect");
      }
    },

  },

};
</script>

<style lang="scss" scoped>

</style>