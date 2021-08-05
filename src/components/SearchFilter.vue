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
        class="filterButton"
        color="#9c27b0"
        @click="$emit('filterResults', searchText)"
        ><span style="color: wheat"> Search</span>
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
.theme--light.v-input{
  color:rgba(192, 0, 250, 0.986) !important;
}
.custom-placeholer-color input::placeholder {
  color: red!important;
  opacity: 1;
}

.custom-label-color .v-label {
  color: red;
  opacity: 1;
}

.custom-placeholer-color input,
.custom-label-color input{
  color: red!important;
}
.filterButton {
  margin-left: 12px;
  height: 54px;
}
</style>