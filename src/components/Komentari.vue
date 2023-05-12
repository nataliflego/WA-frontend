<template>
  <div>
    <h4>Komentari ({{ komentari.length }})</h4>

    <ul>
      <li
        v-for="komentar in komentari"
        :key="komentar._id"
        style="list-style-type: none"
      >
        <p>
          <strong>{{ komentar.author }}</strong>
          <small>{{ komentar.timestamp }}</small> <br />
          {{ komentar.text }} <br />
        </p>
      </li>
    </ul>
    <hr />
    <form @submit.prevent="addkomentar">
      <div v-if="prikazimessage">
        <h6>{{ message }}</h6>
      </div>
      <div class="formazakom">
        <label for="author">Autor:</label>
        <input id="author" type="text" v-model="newComment.author" required />
        <!--  <label for="text"> Komentar:</label> -->
        <br />
        <textarea
          id="text"
          v-model="newComment.text"
          required
          placeholder="Ostavi komentar..."
        ></textarea>
        <button type="submit" class="btn btn-light btn-lg">
          Dodaj komentar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import moment from "moment";
import { Service } from "@/services";

export default {
  name: "Komentari",
  props: {
    experienceId: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      komentari: [],
      newComment: {
        author: "",
        text: "",
        timestamp: "",
      },
      message: "",
      prikazimessage: false,
    };
  },
  created() {
    // dohvati komentare za trenutno iskustvo
    this.fetchComments();
  },

  methods: {
    showMessage() {
      this.prikazimessage = true;
      setTimeout(() => {
        this.prikazimessage = false;
      }, 3000);
    },
    async fetchComments() {
      // da se novi komentar gurne u niz komentara nakon uspjesnog odgovora s servera
      try {
        const response = await Service.get(
          `/iskustvo/${this.experienceId}/komentari`
        );
        const comments = response.data;
        comments.forEach((comment) => {
          try {
            const publishedDate = new Date(comment.objavljeno);
            if (isNaN(publishedDate)) {
              comment.timestamp = "Invalid date";
              return;
            }

            const elapsedSeconds = Math.floor(
              (new Date() - new Date(comment.objavljeno)) / 1000
            );
            if (elapsedSeconds < 60) {
              comment.timestamp = `${elapsedSeconds} seconds ago`;
            } else if (elapsedSeconds < 3600) {
              const elapsedMinutes = Math.floor(elapsedSeconds / 60);
              comment.timestamp = `${elapsedMinutes} minutes ago`;
            } else if (elapsedSeconds < 86400) {
              const elapsedHours = Math.floor(elapsedSeconds / 3600);
              comment.timestamp = `${elapsedHours} hours ago`;
            } else {
              const elapsedDays = Math.floor(elapsedSeconds / 86400);
              comment.timestamp = `${elapsedDays} days ago`;
            }
          } catch (error) {
            console.log("Error izracunvanjem proteklog vremensa: ", error);
          }
        });

        this.komentari = comments;
      } catch (error) {
        console.log("Greška prilikom dohvata komentara:", error);
        throw error;
      }
    },
    async addkomentar() {
      const timestamp = moment().format("MMMM Do YYYY, h:mm:ss a");
      // dal je timestamp validan
      if (!moment(timestamp, "MMMM Do YYYY, h:mm:ss a", true).isValid()) {
        console.log("Invalid timestamp:", timestamp);
        return;
      }
      const newComment = {
        experienceId: this.experienceId,
        author: this.newComment.author,
        text: this.newComment.text,
        objavljeno: timestamp,
      };
      try {
        const response = await Service.post(
          `/iskustvo/${this.experienceId}/komentari`,
          this.newComment
        );
        const dodanKom = response.data;
        this.komentari.push(dodanKom);

        this.newComment.author = "";
        this.newComment.text = "";
        this.message = "Komentar je uspjesno dodan!";
        this.showMessage();
        this.fetchComments();
      } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        this.message = "Greška prilikom dodavanja komentara";
        throw error;
      }
      /*  this.$refs.komentari.fetchComments(); */
    },
  },
};
</script>
<style scoped>
h6 {
  margin: 0.2%;
  background-color: rgb(147, 213, 131);
  padding: 2%;
  width: 100%;
  border-radius: 20px;
  /* color: white; */
}
small {
  font-size: 12px;
  margin-left: 1%;
  color: rgb(94, 92, 92);
}
button {
  font-size: 17px;
  color: white;
  /*   background-color: rgb(103, 191, 49); */
  background-color: rgb(23, 162, 81);
  /* align-self: right; */
}
button:hover {
  background-color: rgb(14, 209, 95);
}
#author {
  border-color: rgb(255, 255, 255);
  border-radius: 10px;
  padding-left: 1.5%;
  margin: 1%;
}
textarea {
  margin-left: 2%;
  border-radius: 18px;
  width: 96%;
  padding: 1.5%;
  border-color: rgb(255, 255, 255);
}
.formazakom {
  background-color: rgb(233, 233, 233);
  border-radius: 20px;
  margin-bottom: 2%;
  margin-top: 2%;
}
ul {
  margin-left: -3%;
}
h4 {
  padding: 1.3%;
}
p {
  margin: 0.2%;
  background-color: rgb(233, 233, 233);
  padding: 2%;
  width: 100%;
  border-radius: 20px;
}
li {
  padding: 0.5%;
  /* background-color: rgb(205, 205, 211); */
}
label {
  padding: 1%;
  margin-left: 1.5%;
}
button {
  margin: 2%;
}
</style>