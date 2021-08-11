<template>
  <div class="button-card-wrapper">
    <back-button />
    <star-ship-card :starship="starship" :showDetailProperties="true" />
  </div>
</template>

<script>
import BackButton from "./BackButton.vue";
import StarShipCard from "./StarShipCard.vue";
export default {
  components: { BackButton, StarShipCard },
  name: "DetailStarShipItem",
  data() {
    return {
      starship: {},
    };
  },
  methods: {
    //Set starship data from vuex store
    getState: function () {
      this.starship = this.$store.state.starship;
    },
  },
  created: function () {
    this.getState();
  },
};
</script>
<style scoped>
.button-card-wrapper {
  text-align: -webkit-center;
  line-height: 100px;
}
</style>