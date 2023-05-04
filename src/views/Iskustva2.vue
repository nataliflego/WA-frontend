<template>
  <div>
    <h3>Rezultati pretrage za "{{ searchTerm }}"</h3>
    <br />
    <ul>
      <li v-for="result in searchResults" :key="result._id">
        {{ result.nazivbolesti }}
      </li>
    </ul>
    <!--  <h1>Rezultati pretrage za "{{ searchTerm2 }}" 2</h1> -->
    <!-- 
    <ul>
      <li v-for="result in searchResults2" :key="result.id">
        {{ result.title }}
      </li>
    </ul> -->

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Naziv</th>
          <!-- 
          <th>Lijek</th>
          <th>Mjesto</th>
          <th>Email</th>
          <th>Opis</th>
          <th>Ključne riječi</th>  -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="i2 in podaci2" :key="i2._id">
          <td>{{ i2._id }}</td>
          <td>{{ i2.nazivbolesti }}</td>
          <!-- 
          <td>{{ i2.lijek }}</td>
          <td>{{ i2.mjesto }}</td>
          <td>{{ i2.email }}</td>
          <td>{{ i2.opis }}</td>
          <td>{{ i2.kljucnerijeci }}</td>  -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Service } from "@/services";
import { Iskustvo } from "@/services";

export default {
  name: "Iskustva2",
  /*  props: ["bolest"], */
  props: {},
  data() {
    return {
      podaci2: [], // ----------------- to je to
      searchResults: [],
      searchTerm: "",
    };
  },

  // ------------------- to je to
  created() {
    Service.get("/data").then((response) => {
      this.podaci2 = response.data;
    });

    this.fetchSearchResults();
    this.funk();
  },
  methods: {
    async funk() {
      if (this.searchTerm) {
        await search();
      }
    },
    async search() {
      let uspjesno = await Iskustvo.pretrazi(
        this.searchTerm,
        this.matchingDocuments
      );
      console.log("Rezultat pretrazivanja", uspjesno);
    },
    async fetchSearchResults() {
      try {
        const response = await Service.get(`/data?q=${this.searchTerm}`);
        let searchResults = await response.data;
        this.searchResults = searchResults;
      } catch (error) {
        console.error("tu smo ", error);
      }
    },
  },
  computed: {
    searchTerm() {
      return this.$route.params.searchTerm; //// dohvati traženi pojam iz parametara rute
    },
  },
};
</script>

<style scoped>
table {
  background-color: rgb(250, 250, 250);
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
  margin: 10px;
}
th,
td {
  border: 1px solid black;
  padding: 5px;
}
</style>