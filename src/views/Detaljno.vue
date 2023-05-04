<template>
  <div>
    <template v-if="iskustvo">
      <h1>Naziv bolesti: {{ iskustvo.nazivbolesti }}</h1>
      <p>Korišteni lijek: {{ iskustvo.lijek }}</p>
      <p>Mjesto liječenja: {{ iskustvo.mjesto }}</p>
      <p>Kontakt: {{ iskustvo.email }}</p>
      <p>Opis bolesti i liječenja: {{ iskustvo.opis }}</p>
      <p>Ključne riječi: {{ iskustvo.kljucnerijeci }}</p>
    </template>
    <template v-else>
      <p>Loading...</p>
    </template>
  </div>
</template>

<script>
import { Service } from "@/services";

export default {
  name: "Detaljno",
  data() {
    return {
      iskustvo: null,
    };
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
    } else {
      console.log("Error: empty response from server");
    }
  },
};
</script>

<style scoped>
/* h1 {
} */
</style>