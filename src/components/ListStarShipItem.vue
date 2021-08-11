
<template>
  <star-ship-card
    :starship="starship"
    @setStarship="setSelectedStarship"
    :showDetailProperties="false"
  />
</template>

<script>
import { mapActions } from "vuex";
import StarShipCard from "./StarShipCard.vue";

export default {
  components: { StarShipCard },
  name: "ListStarShipItem",
  props: {
    starship: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["setItem"]),
    setSelectedStarship(starship) {
      this.$store.dispatch("setItem", starship);
      this.$router.push({ name: "DetailStarShipItem" });
    },
  },
};
</script>