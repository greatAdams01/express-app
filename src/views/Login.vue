<template>
  <div class="text-center my-5">
    <div class="heading mt-5 pt-5">Welcome! Login.</div>
    <div class="mx-lg-auto mx-3 w-50">
      <input
        type="text"
        class="p-2 border my-2"
        placeholder="Enter your  Email Address"
        v-model="email"
      />
      <input
        type="password"
        class="p-2 border my-2"
        placeholder="Enter your Password"
        v-model="password"
      />
      <input @click="login" type="button" class="p-2 btn3 my-2" value="LOGIN" />
    </div>
  </div>
</template>
<script>
// import { mapMutations } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    // ...mapMutations(["userLoggedIn"]),
    login() {
      fetch("https://quintessential.herokuapp.com/api", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST",
        body: JSON.stringify({
          query: `
             query{
              login(email: "${this.email}", password: "${this.password}"){
                token
              }
            }
          `,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result.data.login);
          // this.userLoggedIn();
          localStorage.setItem('token', JSON.stringify(result.data.login.token))
          this.$router.push("/admin");
        });
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Rubik:wght@900&display=swap");
.btn3 {
  background-color: #0d0106;
  color: #fbfbff;
}
.heading {
  font-size: 30px;
  font-family: "Rubik", sans-serif;
}
.w-50 {
  width: 50% !important;
}
input {
  width: 100%;
}
@media screen and (max-width: 600px) {
  .w-50,
  input {
    width: 90% !important;
  }
}
</style>