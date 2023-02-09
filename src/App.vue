
<!--
<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <button
      class="btn btn-primary"
      data-bs-target="#collapseTarget"
      data-bs-toggle="collapse"
    >
      Bootstrap collapse
    </button>
    <div class="collapse py-2" id="collapseTarget">
      This is the toggle-able content!
    </div>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>  -->

<style scoped>
.izbornik {
  padding-left: 6%;
  padding-top: 2%;
  padding-bottom: 2%;
}
.imekorisnik {
  margin-left: 100vh;
  margin-top: 1.3vh;
}
</style>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light izbornik">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">IZBORNIK</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/"
              >Početna</RouterLink
            >
            <!-- pisalo je: "nav-link-active" -->
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/upisibolest"
              >Upiši bolest</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-if="!auth.authenticated"
              class="nav-link"
              to="/registracija"
              >Registracija</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-if="!auth.authenticated"
              class="nav-link"
              to="/prijava"
              >Prijava</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink v-if="auth.authenticated" class="nav-link" to="/forma"
              >Forma</RouterLink
            >
          </li>
          <li class="nav-item">
            <button type="button" v-if="auth.authenticated">
              <a @click="odjava" class="nav-link" href="#">Odjava</a>
            </button>
          </li>
          <li class="imekorisnik">
            {{ auth.imekorisnik }}
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link disabled">Prijava</a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<script>
//import pocetnakomponenta from "@/components/pocetnakomponenta.vue";
import { Auth } from "@/services";

export default {
  name: "App",
  data() {
    return {
      auth: Auth.stanje,
      /*  authenticated1: 0, */
    };
  },
  /* mounted() {
    authenticated1 = Auth.authenticated();
  }, */
  methods: {
    odjava() {
      Auth.odjava();
      this.$router.go();
    },
  },
};

/* import Vue from "vue";
alert(`Vue version : ${Vue.version}`); */
</script>



