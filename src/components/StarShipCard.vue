<template>
  <v-container>
    <v-card class="mx-auto my-12 card">
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
      <!-- If its for details show starship details-->
      <v-card-text class="card-text info-text" v-if="showDetailProperties">
        <star-ship-detail-values :starship="starship" />
      </v-card-text>
      <!--Else show see more button -->
      <v-card-actions v-else>
        <v-btn @click="emitStarshipToParent">See More</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import StarShipDetailValues from "./StarShipDetailValues.vue";
export default {
  components: { StarShipDetailValues },
  name: "StarShipCard",
  props: {
    starship: {
      type: Object,
      required: true,
    },
    showDetailProperties: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    //Parse rating value to integer
    parsRating() {
      return parseInt(this.starship.hyperdrive_rating);
    },
  },
  //Emit selected starship item to parent
  methods: {
    emitStarshipToParent () {
      this.$emit('setStarship',this.starship)
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
  max-width: 374px;
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
/deep/.theme--light.v-divider {
  color: aliceblue !important;
}
/deep/.mdi-star-outline {
  color: aliceblue !important;
}
.info-text {
  font-size: 16px;
  text-align: left;
}
.rating-text {
  margin-left: 8px;
  margin-top: 1px;
}
</style>
