<template>
  <div>
    <h1>Sva iskustva</h1>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Naziv</th>
          <th>Lijek</th>
          <th>Mjesto</th>
          <th>Email</th>
          <th>Opis</th>
          <th>Ključne riječi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i2 in podaci2" :key="i2._id">
          <td>{{ i2._id }}</td>
          <td>{{ i2.nazivbolesti }}</td>
          <td>{{ i2.lijek }}</td>
          <td>{{ i2.mjesto }}</td>
          <td>{{ i2.email }}</td>
          <td>{{ i2.opis }}</td>
          <td>{{ i2.kljucnerijeci }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Service } from "@/services";

export default {
  data() {
    return {
      podaci2: [], // ----------------- to je to
    };
  },
  methods: {},
  // ------------------- to je to
  created() {
    Service.get("/data").then((response) => {
      this.podaci2 = response.data;
    });
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