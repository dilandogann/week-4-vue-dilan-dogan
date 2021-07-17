
<template>
<v-container>
          <v-btn
        class="ma-2"
        color="orange darken-2"
        dark
        @click="goBack"
      >
        <v-icon
          dark
          left
        >
          mdi-arrow-left
        </v-icon>Back
      </v-btn>
  <v-card class="mx-auto my-12 myCard" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <img src="./../assets/starship.png" width="100%" />

    <v-card-title>{{ starship.name }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="parsRating"
          class="rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          {{ starship.hyperdrive_rating }}
        </div>
      </v-row>

      <div class="model">{{ starship.model }}</div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-text>
     <p><strong>Passengers: </strong> {{starship.passengers}}<i></i></p>
     <p><strong>Max Atmosphering Speed: </strong>{{starship.max_atmosphering_speed}}<i></i></p>
     <p><strong>Manufacturer:</strong> {{starship.manufacturer}}<i></i></p>
     <p><strong>Crew:  </strong>{{starship.crew }}<i></i></p>
     <p><strong>Cargo Capacity:  </strong>{{starship.cargo_capacity }}<i></i></p>
    </v-card-text>
  </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DetailCard",
  data() {
    return {
      starship: {},
    };
  },
  computed: {
    ...mapGetters(["getStarship"]),
    parsRating() {
      return parseInt(this.starship.hyperdrive_rating);
    },
  },
  methods: {
    getState: function () {
      this.starship = this.$store.state.starship;
      console.log(this.starship)
    },
    goBack(){
        this.$router.back()
    }
  },
  created: function () {
    this.getState();
  },
};
</script>
<style scoped>
.model {
  margin-top: 22px;
  text-align: initial;
}
.button {
  margin-top: 20px;
}
.rating {
  margin-left: 10px;
}
.myCard{
        margin-left: 700px;
         margin-top:24px
}
</style>