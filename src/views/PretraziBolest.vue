<template>
  <form class="pretrazibolest" @submit.prevent="search">
    <div class="container">
      <img
        src="../assets/slika9.jpeg"
        class="img-fluid slika1"
        alt="Responsive image"
      />
      <div class="centered">
        <h1>Pretraži bolest:</h1>
        <div class="prvopolje">
          <input
            class="form-control form-control-lg polje"
            type="text"
            v-model="searchTerm"
            placeholder="Pretraži bolest"
            @input="filterItems"
            required
          />
          <!--  <MyComponent :polje="getSearchTerm(searchTerm)" /> -->
          <!-- <ul v-show="showDropdown">
            <li v-for="rijec in matchingDocuments" :key="rijec._id">
              {{ rijec.kljucnerijeci }}
            </li>
          </ul> -->
        </div>
        <div class="pretrazi">
          <button class="btn btn-success gumb" @click="prebaci">
            PRETRAŽI
          </button>
        </div>
      </div>
    </div>

    <div id="iskustva">
      <br />
      <h2>
        Prikaz iskustva korisnika za pojam
        <b
          ><i>"{{ searchTerm }}"</i></b
        >
      </h2>
      <div class="skup_kartica" v-for="item in podaci" :key="item">
        <div class="kartica" v-for="value in item">
          <router-link :to="{ name: 'Detaljno', params: { id: value._id } }"
            ><b
              ><i> Bolest: {{ value.nazivbolesti }} </i></b
            ></router-link
          ><br />
          Lijek: {{ value.lijek }} <br />
          email: {{ value.email }}
        </div>

        <!-- <p>{{ item[0] }}</p> -->
      </div>
    </div>
  </form>
</template>

<script>
import { Iskustvo } from "@/services";
import { Service } from "@/services";

export default {
  name: "PretraziBolest",

  data() {
    return {
      searchTerm: "",
      /*    matchingDocuments: [],
      showDropdown: false, */
      jeVidljiv: false,
      podaci: [],
    };
  },
  // za dropdown menu
  /*  computed: {
    filterItems() {
      this.matchingDocuments = this.searchTerm.filter((searchTerm) =>
        searchTerm.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      this.showDropdown = this.matchingDocuments.length > 0;
    },
  }, */
  /*  computed: {
    filteredSearchInput() {
      let searchTerms = this.searchTerm.trim().split(" ");
      if (searchTerms.length >= 3) {
        return searchTerms.slice(0, 3).join(" ");
      } else {
        return "";
      }
    },
  }, */
  methods: {
    prebaci() {
      const el = document.querySelector("#iskustva");
      if (el) {
        el.scrollIntoView();
      }
      /*  this.jevidljiv = true;
      this.$nextTick(() => {
        this.$refs.iskustva.scrollIntoView();
      }); */
      /*   this.$refs.iskustva.scrollIntoView(); */
    },

    async search() {
      console.log("početak search()");
      try {
        let uspjesno = await Iskustvo.pretrazi(this.searchTerm);
        console.log(
          "nakon awaita search() dolaze podaci od pretrazi() ",
          uspjesno
        );

        this.podaci = uspjesno;
        console.log("this.podaci: ", this.podaci);

        for (let i = 0; i < this.podaci.length; i++) {
          console.log(this.podaci[i]);
        }
        /*  console.log(this.filteredSearchInput); */
        /*   return this.searchInput.trim().slpit("").slice(0, 3).join(""); */
      } catch (error) {
        console.error("error tijekom search() ", error);
      }
    },
  },
};
</script>

<style scoped>
a:link {
  color: black;
  background-color: transparent;
  text-decoration: none;
}
a:visited {
  color: black;
  text-decoration: underline;
  cursor: auto;
}
a:hover {
  color: black;
}
a:link:active {
  color: black;
}
a:visited:active {
  color: (internal value);
}
#iskustva {
  margin-top: 5%;
  padding-bottom: 10%;
  margin-bottom: 20%;
  /*   background-color: blueviolet; */
}
.kartica {
  padding: 2%;
  /*   background-color: rgba(87, 179, 61, 0.767); */
  background-color: rgba(218, 218, 218, 0.767);
  margin-top: 2%;
  margin-right: 2%;
  margin-left: 4%;
  margin-bottom: 2%;
  border: 1px solid black;
  border-radius: 9px;

  width: 18%;
  display: inline-block;
}

.pretrazibolest {
  /*  background-color: rgb(41, 187, 51); */
}
.slika1 {
  opacity: 0.8;
}
.polje {
  margin-top: 5%; /*1.5vh*/
  border-color: rgb(0, 0, 0);
}
input {
  background-color: rgb(238, 237, 237);
}

h2 {
  margin-left: 4%;
  margin-top: 3%;
  margin-bottom: 1%;
}
.container {
  position: relative;
  text-align: center;
  color: rgb(0, 0, 0);
}
.centered {
  position: absolute;
  top: 47%;
  left: 55%;
  transform: translate(-50vh, -10vh);
  width: 50%;
}
.prvopolje {
  display: inline-block;
  /*   background-color: rgb(255, 35, 233); */
  width: 45%;
  padding: 0.5vh;
  margin-left: 7vh;
}
.pretrazi {
  display: inline-block;
  /*   background-color: rgb(140, 232, 43); */

  text-align: center;
  margin-right: 5vh;
  padding: 0.5vh;
  vertical-align: middle;
}
</style>


