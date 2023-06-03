<style scoped>
.izbornik {
  padding-left: 6%;
  padding-top: 2%;
  padding-bottom: 2%;
}
.imekorisnik {
  margin-left: 20%;
  font-size: 14px;
  display: inline;
}
.nav-link.active {
  font-weight: 400;
}
.livo {
  margin-top: 0.5%;
}

/* .butun {
  background-color: rgb(239, 239, 239);
} */
</style>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light izbornik">
    <div class="container-fluid">
      <a class="navbar-brand">IZBORNIK</a>
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
      <div class="livo collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink
              :class="{ 'nav-link': true, active: $route.path === '/' }"
              aria-current="page"
              to="/"
              >Početna</RouterLink
            >
            <!-- pisalo je: "nav-link-active" -->
          </li>
          <li class="nav-item">
            <RouterLink
              :class="{
                'nav-link': true,
                active: $route.path === '/pretrazibolest',
              }"
              to="/pretrazibolest"
              >Pretraži bolest</RouterLink
            >
          </li>
          <li class="nav-item">
            <!-- v-if="!auth.registriran" -->
            <RouterLink
              v-if="!auth.authenticated && !auth.registriran"
              :class="{
                'nav-link': true,
                active: $route.path === '/registracija',
              }"
              to="/registracija"
              >Registracija</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              v-if="!auth.authenticated"
              :class="{
                'nav-link': true,
                active: $route.path === '/prijava',
              }"
              to="/prijava"
              >Prijava</RouterLink
            >
          </li>
          <li class="nav-item">
            <!-- && auth.registriran -->
            <RouterLink
              v-if="auth.authenticated"
              :class="{
                'nav-link': true,
                active: $route.path === '/dodajiskustvo',
              }"
              to="/dodajiskustvo"
              >Dodaj iskustvo</RouterLink
            >
            <!--       v-if="auth.authenticated || auth.registriran" -->
          </li>
          <li class="butun nav-item">
            <!-- && auth.registriran -->
            <button
              type="button"
              v-if="auth.authenticated"
              style="border-radius: 10px; background-color: rgb(239, 239, 239)"
            >
              <!--  v-if="auth.authenticated || auth.registriran" -->
              <a @click="odjava" class="nav-link" href="#">Odjava</a>
            </button>
          </li>
          <li class="desno nav-item" style="margin-top: 2%">
            <div
              class="imekorisnik"
              style="padding-bottom: 20px; text-align: center"
            >
              <u> {{ auth.imekorisnik }}</u>
            </div>
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
import { Auth } from "@/services";

export default {
  name: "App",
  data() {
    return {
      auth: Auth.stanje,
    };
  },

  mounted() {
    this.auth = Auth.stanje;
  },
  methods: {
    odjava() {
      Auth.odjava();
      this.auth = Auth.stanje;
      /*    this.$router.push({ path: '/' }); */
      this.$router.go();
    },
  },
};
</script>



