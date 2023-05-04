<template>
  <form @submit.prevent="submitForm">
    <div class="blok">
      <div class="lijevo">
        <!--  LIVO -->
        <p><i>Ispuni tražena polja za slanje informacija</i></p>
      </div>

      <div class="desno">
        <!-- DESNO-->
        <label for="nazivbolesti">Naziv bolesti</label>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="nazivbolesti"
            v-model="nazivbolesti"
            name="naziv"
            placeholder="Naziv bolesti..."
          />
        </div>
        <label for="koristenilijek">Korišteni lijek...</label>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="koristenilijek"
            v-model="koristenilijek"
            name="lijek"
          />
        </div>
        <label for="mjestolijecenja">Mjesto liječenja...</label>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="mjestolijecenja"
            v-model="mjestolijecenja"
            name="mjesto"
          />
        </div>
        <label for="email">Email...</label>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            name="email"
          />
        </div>
        <label for="opisiskustva">Opis iskustva bolesti...</label>
        <div class="form-floating mb-3">
          <textarea
            type="text"
            class="form-control"
            id="opisiskustva"
            v-model="opisiskustva"
            name="opis"
            style="height: 100px"
          ></textarea>
        </div>
        <label for="kljucnerijeci">Ključne riječi...</label>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="kljucnerijeci"
            v-model="kljucnerijeci"
            name="kljucnerijeci"
          />
        </div>
        <div class="d-flex justify-content-center">
          <button
            v-on:click="displayMessage()"
            type="submit"
            class="btn btn-light btn-block btn-lg gradient-custom-4 text-body border-secondary"
          >
            Spremi simptome
          </button>
        </div>
        <div
          style="border: 1px solid black; border-radius: 20px; margin: 20px"
          id="message"
        ></div>
      </div>
    </div>
  </form>
</template>

<script>
</script>
<script>
import { Iskustvo } from "@/services";

export default {
  data() {
    return {
      nazivbolesti: "",
      koristenilijek: "",
      mjestolijecenja: "",
      email: "",
      opisiskustva: "",
      kljucnerijeci: [],
    };
  },
  methods: {
    /* razdjeli() {
      let rijeci = this.kljucnerijeci;
      let splited;
      if (rijeci.includes(",") == true) {
        splited = rijeci.split(",");
      }
      console.log(splited);
    }, */
    async submitForm() {
      let uspjesno = await Iskustvo.spremanje(
        this.nazivbolesti,
        this.koristenilijek,
        this.mjestolijecenja,
        this.email,
        this.opisiskustva,
        this.kljucnerijeci
      );
      console.log("Rezultat spremanja", uspjesno);

      if (uspjesno == true) {
        this.$router.push({ URL: "/pocetna" });
      }
    },
    displayMessage() {
      var messageElement = document.getElementById("message");
      messageElement.textContent = "Uspješno spremljeno!";
      messageElement.style.backgroundColor = "green";
      messageElement.style.color = "white";
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 4%;
}
label {
  margin-bottom: 2%;
  margin-left: 2%;
}
input {
  width: 60vh;
}
.blok {
  display: flex;
  /* padding: 60px; */
}
.lijevo {
  display: inline-block;
  background-color: rgb(204, 217, 237);
  padding: 30px;
  width: 19%;
  text-align: right;
  height: 110vh;
  box-sizing: border-box;

  /* margin-right: 7%;
  margin-left: 7%; */
}
.desno {
  display: inline-block;
  /* background-color: rgb(
    140,
    232,
    43
  ); */ /* tu ce pojti bila boja, ne namištaj width*/

  vertical-align: middle;
  margin-left: 2%;
  padding-top: 2%;
  width: 40%;
}
.gradient-custom-4 {
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgb(130, 191, 224), rgb(132, 172, 232));
}
</style>