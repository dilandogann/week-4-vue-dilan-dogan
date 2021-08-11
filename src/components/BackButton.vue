<template>
  <v-btn class="ma-2" color="orange darken-2" dark @click="goBack">
    <v-icon dark left> mdi-arrow-left </v-icon>Back
  </v-btn>
</template>

<script>
export default {
  name: "DetailCard",
  methods: {
    //Go back to previous component with router
    goBack() {
      this.$router.back();
    },
  },
};
</script>