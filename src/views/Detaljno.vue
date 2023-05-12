<template>
  <div class="box">
    <div class="nalivo">
      <p class="poseban">
        <i>Prikaz detaljnijih informacija o odabranom iskustvu</i>
      </p>
    </div>
    <div class="nadesno">
      <template v-if="iskustvo">
        <h4>
          Naziv bolesti: <b> {{ iskustvo.nazivbolesti }}</b>
        </h4>
        <hr />
        <p><b>Korišteni lijek: </b> {{ iskustvo.lijek }}</p>
        <p><b>Mjesto liječenja:</b> {{ iskustvo.mjesto }}</p>
        <p><b>Kontakt:</b> {{ iskustvo.email }}</p>
        <p><b>Opis bolesti i liječenja: </b>{{ iskustvo.opis }}</p>
        <p><b>Ključne riječi:</b> {{ iskustvo.kljucnerijeci }}</p>

        <div id="objavljeno">Objavljeno: {{ iskustvo.datum }}</div>

        <hr />
      </template>
      <template v-else>
        <p>Loading...</p>
      </template>

      <div class="dodatiskustvo">
        <h4 class="drugih4">Želiš dodati svoje iskustvo?</h4>
        <RouterLink to="/forma" class="fw-bold text-body"
          ><p class="pklikni"><u> Klikni ovdje</u></p></RouterLink
        >
      </div>
      <br />
      <div id="komentari" v-if="experienceId">
        <!--    <h1>{{ experience.nazivbolesti }}</h1> -->
        <Komentari ref="komentari" :experience-id="experienceId" />
      </div>
      <h2 v-else>Još nema komentara</h2>
    </div>
  </div>
</template>

<script>
import { Service } from "@/services";
import Komentari from "../components/Komentari.vue";

export default {
  name: "Detaljno",
  components: {
    Komentari,
  },
  data() {
    return {
      iskustvo: null,
      experience: null,
      experienceId: null,
    };
  },
  created() {
    //dohvati podatke o iskustvu
    const experienceId = this.$route.params.id;
    Service.get(`/iskustvo/${experienceId}`).then((response) => {
      this.experience = response.data;
      this.experienceId = experienceId; // Set experienceId tu
    });
  },

  async mounted() {
    const id = this.$route.params.id;
    // fetch the data item from the server using the id       (`/api/data/${id}`)        /iskustvo/:id
    const response = await Service.get(`/iskustvo/${id}`);
    /*  this.iskustvo = await response.data;
   const par = JSON.parse(this.iskustvo);
    console.log(par); */
    if (response.data) {
      console.log(response.data);
      this.iskustvo = response.data;
      /*  let uppercase = this.iskustvo.toUpperCase();
      console.log("uppercase: " + uppercase); */
    } else {
      console.log("Error: empty response from server");
    }
  },
};
</script>

<style scoped>
#objavljeno {
  text-align: right;
  padding-right: 1%;
  font-size: 13px;
}
.pklikni {
  padding-top: 2%;
  font-size: 14px;
  display: inline-block;
}
.dodatiskustvo {
  text-align: center;
  margin-top: 3%;
  border: 1px solid rgb(121, 125, 147);
  border-radius: 22px;
  background-color: rgba(129, 155, 182, 0.749);
}
.drugih4 {
  padding-top: 2%;
  color: white;
  display: inline-block;
  margin-left: 1%;
}
h4 {
  padding: 1%;
}
p {
  padding: 1.3%;
}
.box {
  display: flex;
}
.nalivo {
  background-color: rgb(170, 224, 186);
  width: 19%;
  display: inline-block;
  text-align: right;
  /*   height: 86.5vh; */
  overflow-y: auto;
  padding: 30px;
  transition: height 0.3s ease-in-out; /* tranzicija za smooth animation */
}
.nadesno {
  background-color: rgb(255, 255, 255);
  display: inline-block;
  vertical-align: middle;
  margin-left: 2%;
  padding-top: 2%;
  width: 77%;
  /*  height: 86.5vh;
  overflow-y: auto; */
}
/* h1 {
} */
</style>