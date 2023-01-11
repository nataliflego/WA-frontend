<template>
  <div class="upisibolest">
    <div class="container">
      <img
        src="../assets/slika9.jpeg"
        class="img-fluid slika1"
        alt="Responsive image"
      />
      <div class="centered">
        <h1>Upiši bolest:</h1>
        <input
          class="form-control form-control-lg polje"
          type="text"
          placeholder="Bolest je..."
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.upisibolest {
  /*  background-color: rgb(41, 187, 51); */
}
.slika1 {
  opacity: 0.8;
}
.polje {
  margin-top: 10%;
  border-color: rgb(0, 0, 0);
}
input {
  background-color: rgb(206, 206, 206);
}

h1 {
  /*   padding-top: 2%; */
}
.container {
  position: relative;
  text-align: center;
  color: rgb(0, 0, 0);
}
.centered {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script>
export default {
  name: "UpisiBolest",
  /* components: {
    HelloWorld,
  }, */
};

// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue";
 */
</script>
