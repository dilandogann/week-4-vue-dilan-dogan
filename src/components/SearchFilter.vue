<template>
  <div>
    <v-row>
      <v-text-field
        v-model="searchText"
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
.filterButton {
  margin-left: 12px;
  height: 54px;
}
</style>