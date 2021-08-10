<template>
  <v-container>
    <v-btn class="ma-2" color="orange darken-2" dark @click="goBack">
      <v-icon dark left> mdi-arrow-left </v-icon>Back
    </v-btn>
    <v-card class="mx-auto my-12 myCard card-border" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
      <img src="./../assets/starship.png" width="100%" />
      <v-card-title class="card-text">{{ starship.name }}</v-card-title>
      <v-card-text class="card-text">
        <v-row align="center" class="mx-0">
          <v-rating
            :value="parsRating"
            class="rating"
            color="#fff"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
          <div class="card-text ms-4">
            {{ starship.hyperdrive_rating }}
          </div>
        </v-row>
        <div class="model">{{ starship.model }}</div>
      </v-card-text>
      <v-divider class="mx-4 card-text"></v-divider>
      <v-card-text class="card-text">
        <p><strong>Passengers: </strong> {{ starship.passengers }}</p>
        <p>
          <strong>Max Atmosphering Speed: </strong
          >{{ starship.max_atmosphering_speed }}
        </p>
        <p><strong>Manufacturer:</strong> {{ starship.manufacturer }}</p>
        <p><strong>Crew: </strong>{{ starship.crew }}</p>
        <p><strong>Cargo Capacity: </strong>{{ starship.cargo_capacity }}</p>
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
    //Get selected starship from vuex store
    ...mapGetters(["getStarship"]),
    //Parse rating value to integer
    parsRating() {
      return parseInt(this.starship.hyperdrive_rating);
    },
  },
  methods: {
    //Set starship data from vuex store
    getState: function () {
      this.starship = this.$store.state.starship;
    },
    //Go back to previous component with router
    goBack() {
      this.$router.back();
    },
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
.myCard {
  margin-left: 700px;
  margin-top: 24px;
}
.card-border {
  border: 2px solid rgba(192, 0, 250, 0.986);
  background: black !important;
}
.card-text {
  color: #fff !important;
}
.rating-text {
  margin-left: 8px;
  margin-top: 1px;
}
./deep/.theme--light.v-divider {
  color: aliceblue !important;
}
/deep/.mdi-star-outline {
  color: aliceblue !important;
}
</style>
