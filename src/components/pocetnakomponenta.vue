<template>
  <div class="kontejner">
    <div class="prvi">
      <img src="@/assets/slika5.jpg" alt="bolesti" class="slika1" />
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
        <a class="btn btn-success" href="https://www.google.com/" role="button"
          >KRENI</a
        >
      </div>
    </div>
  </div>
  <!-- <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div> -->
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
  margin-left: 10px;
}
.slika1 {
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
