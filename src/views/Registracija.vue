
<template>
  <section class="vh-100 bg-image">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 30px">
              <div class="card-body p-5">
                <h3 class="text-center mb-5">Registracija</h3>

                <form @submit.prevent="registrirajse">
                  <div class="form-outline mb-4">
                    <input
                      v-model="ime"
                      type="text"
                      id="form3Example1cg"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form3Example1cg">Ime</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      v-model="username"
                      type="email"
                      id="form3Example3cg"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form3Example3cg"
                      >Email</label
                    >
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      v-model="password"
                      type="password"
                      id="form3Example4cg"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form3Example4cg"
                      >Lozinka</label
                    >
                  </div>

                  <div v-if="errorMessage" class="alert alert-danger">
                    {{ errorMessage }}
                  </div>

                  <div class="d-flex justify-content-center">
                    <button
                      type="submit"
                      class="btn btn-light btn-block btn-lg gradient-custom-4 text-body border-secondary"
                      to="/dodajiskustvo"
                    >
                      Registriraj se
                    </button>
                  </div>

                  <p class="text-center text-muted mt-5 mb-0">
                    Već si član?
                    <RouterLink to="/prijava" class="fw-bold text-body"
                      ><u>Klikni ovdje</u></RouterLink
                    >
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gradient-custom-3 {
  /* fallback for old browsers */
  background: #000000;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    rgba(200, 214, 43, 0.5),
    rgba(95, 51, 177, 0.5)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right,
    rgba(30, 47, 203, 0.5),
    rgba(39, 43, 45, 0.5)
  );
}
.gradient-custom-4 {
  /* fallback for old browsers */
  background: #84fab0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    rgb(72, 169, 108),
    rgb(29, 159, 224)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgb(218, 170, 196), rgb(141, 117, 162));
}
</style>

<script>
import { Auth } from "@/services";
import $router from "@/router";

export default {
  name: "Registracija",
  data() {
    return {
      ime: "",
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async registrirajse() {
      try {
        let uspjesno = await Auth.registracija(
          this.ime,
          this.username,
          this.password
        );
        console.log("Rezultat registracije", uspjesno);

        if (uspjesno == true) {
          this.$router.push({ name: "Dodajiskustvo" });
        }
      } catch (error) {
        console.error("Greška prilikom registrirajse() ", error);
        if (error.response === 11000) {
          this.errorMessage = "Korisnik već postoji.";
        } else {
          this.errorMessage = "Registracija nije uspijela: Pokušaj ponovno.";
        }
        throw error;
      }
    },
  },
};
</script>
