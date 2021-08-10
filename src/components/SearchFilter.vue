<template>
  <div>
    <v-row>
      <v-text-field
        v-model="searchText"
        class="custom-label-color"
        label="Search"
        outlined
        clearable
      ></v-text-field>

      <v-btn
        class="filterButton button-margin"
        color="#9c27b0"
        @click="$emit('filterResults', searchText)"
      >
        <v-icon class="wheat-color">mdi-magnify</v-icon>
        <span class="button-text wheat-color"> Filter</span>
      </v-btn>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "SearchFilter",
  data() {
    return {
      searchText: "",
    };
  },
};
</script>
<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: rgba(192, 0, 250, 0.986);
}
.theme--light.v-input {
  color: rgba(192, 0, 250, 0.986) !important;
}
/deep/.theme--light.v-label {
  color: aliceblue !important;
  font-size: 16px;
}
.filterButton {
  margin-left: 12px;
  height: 54px;
}
.v-btn>.v-btn__content .v-icon {
    color: aliceblue !important;
}.button-text{
  font-weight: 600;
}
.wheat-color{
  color: wheat
}
.button-margin{
  margin-top: 10px;
}
/deep/ .theme--light.v-input input, .theme--light.v-input textarea{
    color: aliceblue !important;
}
</style>