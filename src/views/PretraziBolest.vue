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
            v-bind:minlength="3"
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
      <div class="skup_kartica" v-for="item in podaci" :key="item">
        <h2>
          Prikaz iskustva korisnika za pojam
          <b
            ><i>"{{ searchTerm }}"</i></b
          >
        </h2>
        <hr />
        <div class="kartica" v-for="value in item">
          <router-link :to="{ name: 'Detaljno', params: { id: value._id } }"
            ><b
              ><i> Bolest: {{ value.nazivbolesti }} </i></b
            ></router-link
          ><br />
          Lijek: {{ value.lijek }} <br />
          email: {{ value.email }}
          <p class="datum">{{ value.datum }}</p>
        </div>

        <div class="dodatiskustvo">
          <h4 class="drugih4">Želiš dodati svoje iskustvo?</h4>
          <RouterLink to="/forma" class="fw-bold text-body"
            ><p class="pklikni"><u> Klikni ovdje</u></p></RouterLink
          >
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { Iskustvo } from "@/services";

export default {
  name: "PretraziBolest",

  data() {
    return {
      searchTerm: "",
      /*    matchingDocuments: [],
      showDropdown: false, */
      podaci: [],
    };
  },

  /*   beforeRouteUpdate(to, from, next) {
    if (to.name !== "PretraziBolest") {
      this.$store.commit("setSearchState", {
        searchTerm: this.searchTerm,
        podaci: this.podaci,
      });
    }
    next();
  },
  beforeRouteLeave(to, from, next) {
    if (to.name !== "PretraziBolest") {
      this.$store.commit("setSearchState", {
        searchTerm: this.searchTerm,
        podaci: this.podaci,
      });
    }
    next();
  }, */
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
      localStorage.setItem("podaci", JSON.stringify(this.podaci));
      localStorage.setItem("term", JSON.stringify(this.searchTerm));
    },
    izbrisilocalstorage() {
      localStorage.removeItem("podaci", "term");
    },
  },
  mounted() {
    const storedp = localStorage.getItem("podaci");
    const storedt = localStorage.getItem("term");
    if (storedp && storedt) {
      this.podaci = JSON.parse(storedp);
      this.searchTerm = JSON.parse(storedt);
    }
    // izbrisi localstorage kada se refresha
    window.addEventListener("beforeunload", this.izbrisilocalstorage);
  },
  beforeUnmount() {
    window.removeEventListener("beforeunload", this.izbrisilocalstorage);
  },
};
</script>

<style scoped>
.datum {
  font-size: 12px;
  text-align: right;
  /* background-color: rgb(176, 152, 152); */
  /*  margin-bottom: 4%; */ /*promijenilo se na sve kartice*/
  padding-top: 10%;
}
.pklikni {
  padding-top: 1%;
  font-size: 14px;
  display: inline-block;
  margin-left: 1%;
}
.dodatiskustvo {
  text-align: center;
  margin-top: 3%;
  border: 1px solid rgb(233, 239, 191);
  border-radius: 22px;
  background-color: rgba(150, 151, 89, 0.749);
  margin-left: 3%;
  margin-right: 3%;
}
.drugih4 {
  padding-top: 1%;
  color: white;
  display: inline-block;
  margin-left: 1%;
}
hr {
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 2%;
}
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
  margin-right: 0.5%;
  margin-left: 4%;
  margin-bottom: 2%;
  border: 1px solid black;
  border-radius: 9px;

  width: 20%;
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


