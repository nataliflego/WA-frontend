<template>
  <div class="kontejner">
    <div class="prvi">
      <img src="@/assets/slika5.jpg" alt="bolesti" class="slika5" />
    </div>
    <div class="drugi">
      <h2>BOLEST I ZDRAVLJE</h2>
      <p>
        Aplikacija za pomaganje u
        <br />
        bolestima koja je temeljena
        <br />
        na iskustvima pacijenata
      </p>
      <div class="butun">
        <RouterLink class="btn btn-success" to="/pretrazibolest" role="button"
          >KRENI</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pocetnakomponenta",
  /* props: {
    msg: String,
  }, */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.kontejner {
  padding: 60px;
  margin-top: 20px;
  // gap: 50px;                      ne dela
}
.prvi {
  display: inline-block;
  /*   background-color: rgb(255, 35, 233); */
  width: 45%;
  margin-right: 7%;
  margin-left: 7%;
}
.slika5 {
  width: 100%;
}
.drugi {
  display: inline-block;
  /*   background-color: rgb(140, 232, 43); */
  margin-top: 10px;
  text-align: center;
  margin-right: 10px;
  margin-left: 8%;
  vertical-align: middle;
}
p {
  padding: 10px;
  font-size: 20px;
  /* background-color: rgb(76, 103, 103); */
}
h2 {
  margin: 10px;
  /* padding: 2%; */
}

/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
