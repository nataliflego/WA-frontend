 <template >
  <div id="app">
    <b-button
      v-b-toggle.sidebar-no-header
      block
      variant="outline-dark"
      class="button"
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
  background-color: rgb(94, 210, 49);
}

.button {
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
</style>

<script>
export default {
  name: "App",
};
/* import Vue from "vue";
alert(`Vue version : ${Vue.version}`); */
</script>