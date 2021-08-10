
<template>
  <v-card class="mx-auto my-12 card" max-width="374">
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

        <div class="card-text rating-text">
          {{ starship.hyperdrive_rating }}
        </div>
      </v-row>

      <div class="model card-text">{{ starship.model }}</div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn @click="setMyItem">See More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Card",
  props: {
    starship: {
      type: Object,
      required: true,
    },
  },
  computed: {
    parsRating() {
      return parseInt(this.starship.hyperdrive_rating);
    },
  },
  methods: {
    ...mapActions(["setItem"]),
    setMyItem() {
      this.$store.dispatch("setItem", this.starship);
      this.$router.push({ name: "DetailCard" });
    },
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
.card {
  border: 2px solid rgba(192, 0, 250, 0.986);
  background: black !important;
}
.card-text {
  color: #fff;
}
/deep/.mdi-star-outline {
  color: aliceblue !important;
}
.rating-text {
  margin-left: 8px;
  margin-top: 1px;
}
</style>