 <template >
  <div id="app">
    <b-button
      v-b-toggle.sidebar-no-header
      block
      variant="outline-dark"
      class="button1"
      >IZBORNIK</b-button
    >
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
    >
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Izbornik</h4>
          <!-- <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p> -->
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Početna</b-nav-item>
              <b-nav-item href="/upisibolest" @click="hide"
                >Upisi bolest</b-nav-item
              >
              <b-nav-item href="#link-2" @click="hide">Prijava</b-nav-item>

              <b-nav-item href="/upisibolest" active @click="hide"
                >Registracija</b-nav-item
              >
              <b-nav-item href="/upisibolest" active @click="hide"
                >Odjava</b-nav-item
              >
            </b-nav>
          </nav>
          <b-button variant="outline-dark" block @click="hide" class="button2"
            >Zatvori izbornik</b-button
          >
        </div>
      </template>
    </b-sidebar>
    <!--     <div :style="image"></div> -->
    <br />

    <div class="kontejner">
      <div class="prvi">
        <img src="@/assets/slika5.jpg" alt="bolesti" class="slika1" />
      </div>
      <div class="drugi">
        <h2>BOLEST I ZDRAVLJE</h2>
        <p>
          Aplikacija za pomaganje u <br />
          bolestima koja je temeljena <br />
          na iskustvima pacijenata
        </p>
        <div class="butun">
          <button type="button" class="btn btn-light">KRENI</button>
        </div>
      </div>
    </div>
  </div>

  <!-- <router-view />  -->
</template>


<!--  <router-link to="/">Pocetna</router-link>
   
  <router-link to="/upisibolest">UpisiBolest</router-link>    -->

 <style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  /*  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #14b637; */

  padding: 1.5rem 4% 8% 4%;
  /*   background-color: rgb(118, 224, 233); */
  background-color: rgb(255, 255, 255);
  max-width: 100%; //doesn't work :)
  height: auto; //doesn't work :)
}

.button1 {
  margin-top: 20px;
  width: 10%;
}
h4 {
  padding-left: 15px;
  padding-top: 20px;
  padding-bottom: 8px;
}
.button2 {
  // padding-top: 2px;        to ne dela
  margin-top: 8px;
  margin-left: 18%;
  width: 180px;
}

.sidebar {
  /* background: rgb(83, 28, 233);    nanke ne dela  */
}
nav {
  /*padding: 25px;

  a {
    font-weight: bold;
    color: #e6e92c;
    &.router-link-exact-active {
      color: #d21771;
    }
  } */
}
.kontejner {
  padding: 60px;
  // gap: 50px;   ne dela
  /*  vertical-align: middle; */
}
.prvi {
  display: inline-block;
  /*   background-color: rgb(255, 35, 233); */
  width: 45%;
  margin-right: 7%;
  margin-left: 10px;
}
.drugi {
  display: inline-block;
  /*   background-color: rgb(140, 232, 43); */
  margin-top: 10px;
  text-align: center;
  margin-right: 10px;
  margin-left: 8%;
}
p {
  padding: 10%;
  font-size: 20px;
}
h2 {
  margin: 10px;
}
.slika1 {
  width: 100%;
}
.butun {
  display: inline-block;
  /*  margin-top: 20px; */
}
</style>

<script>
export default {
  name: "App",
  data() {
    /*  return {
      image: { backgroundImage: "url(src/assets/slika5.jpg)" },
    }; */
  },
};

/* import Vue from "vue";
alert(`Vue version : ${Vue.version}`); */
</script>



