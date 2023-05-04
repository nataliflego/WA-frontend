
<template>
  <section class="vh-100 bg-image">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
        <div
          class="
            row
            d-flex
            justify-content-center
            align-items-center
            h-100
            visina
          "
        >
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 30px">
              <div class="card-body p-5">
                <h3 class="text-center mb-5">Prijava</h3>

                <form @submit.prevent="prijavise">
                  <div class="form-outline mb-4">
                    <input
                      v-model="email"
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

                  <div class="d-flex justify-content-center">
                    <button
                      type="submit"
                      class="
                        btn btn-light btn-block btn-lg
                        gradient-custom-4
                        text-body
                        border-secondary
                      "
                      to="/forma"
                    >
                      Prijavi se
                    </button>
                  </div>
                  <p class="text-center text-muted mt-5 mb-0">
                    Nisi član?
                    <RouterLink to="/registracija" class="fw-bold text-body"
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
  background: #51c96f;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    rgba(110, 213, 92, 0.5),
    rgba(203, 238, 109, 0.5)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right,
    rgba(146, 216, 165, 0.5),
    rgba(14, 99, 54, 0.5)
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
  background: linear-gradient(to right, rgb(167, 243, 186), rgb(119, 192, 164));
}
</style>

<script>
import { Auth } from "@/services";

export default {
  name: "Prijava",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async prijavise() {
      let uspjesno = await Auth.prijava(this.email, this.password);
      console.log("Rezultat prijave", uspjesno);

      if (uspjesno == true) {
        this.$router.push({ name: "Forma" }); // to dela!
      }
    },
  },
};
</script>