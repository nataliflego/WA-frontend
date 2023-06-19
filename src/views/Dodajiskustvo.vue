<template>
  <form ref="form" @submit.prevent="submitForm">
    <div class="blok">
      <div class="lijevo">
        <!--  LIVO -->
        <p>
          <i>Ispuni tražena polja za slanje informacija o vašem iskustvu</i>
        </p>
      </div>

      <div class="desno">
        <!-- DESNO-->
        <label for="nazivbolesti">Naziv bolesti</label>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="nazivbolesti, myInput"
            v-model="nazivbolesti"
            name="naziv"
            placeholder="Naziv bolesti..."
            required
            :disabled="disableInputs"
          />
        </div>
        <label for="koristenilijek">Korišteni lijek...</label>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="koristenilijek, myInput"
            v-model="koristenilijek"
            name="lijek"
            required
            :disabled="disableInputs"
          />
        </div>
        <label for="mjestolijecenja">Mjesto liječenja...</label>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="mjestolijecenja, myInput"
            v-model="mjestolijecenja"
            name="mjesto"
            required
            :disabled="disableInputs"
          />
        </div>
        <label for="email">Email...</label>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="email, myInput"
            v-model="email"
            name="email"
            required
            :disabled="disableInputs"
          />
        </div>
        <label for="opisiskustva">Opis iskustva bolesti...</label>
        <div class="form-floating mb-3">
          <textarea
            type="text"
            class="form-control"
            id="opisiskustva, myInput"
            v-model="opisiskustva"
            name="opis"
            style="height: 100px"
            required
            :disabled="disableInputs"
          ></textarea>
        </div>
        <label for="kljucnerijeci">Ključne riječi...</label>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="kljucnerijeci, myInput"
            v-model="kljucnerijeci"
            name="kljucnerijeci"
            required
            :disabled="disableInputs"
          />
        </div>
        <div
          class="poruka"
          v-if="message"
          style="
            border-radius: 20px;
            margin-left: 4px;
            margin-top: 6%;
            margin-bottom: 2%;
            width: 69%;
          "
          :style="messageStyle"
          id="message"
        >
          <!-- border: 1px solid black; -->
          {{ message }}
        </div>
        <div class="d-flex justify-content-center">
          <!-- click="
              submitForm;
              displayMessage();
              buttonClicked = true;
            " -->
          <!--   :disabled="formIncomplete || buttonClicked" -->
          <button
            @submit.prevent="submitForm"
            :disabled="formIncomplete || buttonClicked"
            type="submit"
            class="spremi btn btn-light btn-block btn-lg gradient-custom-4 text-body border-secondary"
          >
            Spremi simptome
          </button>
          <div v-if="buttonClicked">
            <RouterLink to="/pretrazibolest"
              ><button
                class="pretrazi btn btn-light btn-block btn-lg gradient-custom-4 text-body border-secondary"
              >
                Pretraži ostala iskustva
              </button></RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
</script>
<script>
import { Iskustvo } from "@/services";

export default {
  name: "Dodajiskustvo",
  data() {
    return {
      nazivbolesti: "",
      koristenilijek: "",
      mjestolijecenja: "",
      email: "",
      opisiskustva: "",
      kljucnerijeci: [],
      buttonClicked: false,
      message: "",
      messageStyle: {},
    };
  },
  methods: {
    async submitForm() {
      console.log("kliknut butun");
      let uspjesno = await Iskustvo.spremanje(
        this.nazivbolesti,
        this.koristenilijek,
        this.mjestolijecenja,
        this.email,
        this.opisiskustva,
        this.kljucnerijeci
      );
      console.log("Rezultat spremanja", uspjesno);

      if (uspjesno) {
        /*  this.$router.push({ URL: "/pocetna" }); */

        this.buttonClicked = true;
        console.log("Button clicked status:", this.buttonClicked);
        /*  this.$router.push({ name: "pocetna" }); */

        this.displayMessage();
        /* this.disableInputs(); */
      }
    },
    /* disableInputs() {
      const inputs = document.getElementsByTagName("input");
      const textareas = document.getElementsByTagName("textarea");

      for (let i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute("disabled", "disabled");
      }

      for (let i = 0; i < textareas.length; i++) {
        textareas[i].setAttribute("disabled", "disabled");
      }
    }, */
    displayMessage() {
      this.message = "Uspješno spremljeno!";
      this.messageStyle = {
        backgroundColor: "rgb(147, 213, 131)",
        color: "black",
        padding: "1%",
        paddingLeft: "2%",
      };

      /*   var messageElement = document.getElementById("message");
      messageElement.textContent = "Uspješno spremljeno!";
      messageElement.style.backgroundColor = " rgb(147, 213, 131)";
      messageElement.style.color = "black";
      messageElement.style.padding = "1%";
      messageElement.style.paddingLeft = "2%"; */
    },
  },
  computed: {
    disableInputs() {
      return this.buttonClicked;
    },
    formIncomplete() {
      return (
        !this.nazivbolesti ||
        !this.koristenilijek ||
        !this.mjestolijecenja ||
        !this.email ||
        !this.opisiskustva ||
        !this.kljucnerijeci
      );
    },
  },
};
</script>

<style scoped>
.poruka {
  margin-left: -10px;
}
.spremi {
  /*  margin-left: -65%; */
  margin-left: -30%;
}

.pretrazi {
  margin-left: 3%;
  width: 100%;
  margin-top: 9%;
}
button {
  margin-top: 3.5%;
  /*  margin-left: -2%; */
  margin-bottom: 2%;
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
  /* height: 110vh; */
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