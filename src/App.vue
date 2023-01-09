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
              <a
                ><b-nav-item href="@/views/UpisiBolest.vue" @click="hide"
                  >Upisi bolest</b-nav-item
                >
              </a>
              <!-- <a :href="link">My Link</a>  -->
              <b-nav-item
                href="https://vuejs.org/guide/essentials/component-basics.html#using-a-component"
                @click="hide"
                >Prijava</b-nav-item
              >

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

    <pocetnakomponenta />
    <!--  <div class="kontejner">
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
          <a class="btn btn-success" href="/upisibolest" role="button">KRENI</a>
        </div>
      </div>
    </div> -->
    <router-view />
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

/* a:link {                           podsjetnik
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
a:active {
  text-decoration: underline;
} */
</style>

<script>
import pocetnakomponenta from "@/components/pocetnakomponenta.vue";

export default {
  name: "App",
  /*
  data() {
      return {
      image: { backgroundImage: "url(src/assets/slika5.jpg)" },
    }; 
  },*/
  components: {
    pocetnakomponenta,
  } /* ,
  data: () => ({ link: "/views/upisibolest.vue" }), */,
};

/* import Vue from "vue";
alert(`Vue version : ${Vue.version}`); */
</script>



