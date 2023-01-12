<template>
  <div class="blok">
    <div class="lijevo">
      <!--  LIVO -->
      <p><i>Ispuni tražena polja za slanje informacija</i></p>
    </div>

    <div class="desno">
      <!-- DESNO-->
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Bolesti"
        />
        <label for="floatingInput">Naziv bolesti...</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Lijek"
        />
        <label for="floatingInput">Korišteni lijek...</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Mjesto"
        />
        <label for="floatingInput">Mjesto liječenja...</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="Email"
        />
        <label for="floatingInput">Email...</label>
      </div>

      <div class="form-floating mb-3">
        <textarea
          class="form-control"
          id="floatingTextarea2"
          name="text"
          placeholder="Opis bolesti"
          style="height: 100px"
        ></textarea>
        <label for="floatingTextarea2">Opis iskustva bolesti...</label>
      </div>
      <div class="d-flex justify-content-center">
        <RouterLink
          type="button"
          class="
            btn btn-light btn-block btn-lg
            gradient-custom-4
            text-body
            border-secondary
          "
          to="/"
        >
          Objavi
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blok {
  display: flex;
  /* padding: 60px; */
}
.lijevo {
  display: inline-block;
  background-color: rgb(204, 217, 237);
  padding: 30px;
  width: 19%;
  text-align: right;
  height: 92vh;
  box-sizing: border-box;

  /* margin-right: 7%;
  margin-left: 7%; */
}
.desno {
  display: inline-block;
  /* background-color: rgb(
    140,
    232,
    43
  ); */ /* tu ce pojti bila boja, ne namištaj width*/

  vertical-align: middle;
  margin-left: 2%;
  padding-top: 2%;
  width: 40%;
}
.gradient-custom-4 {
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgb(130, 191, 224), rgb(132, 172, 232));
}
</style>