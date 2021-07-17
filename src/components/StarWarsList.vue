<template>
  <v-container>
    <v-row>
      <v-col cols="4"></v-col>
      <v-col cols="4">
        <v-row>
          <v-text-field label="Search" v-model="search"></v-text-field>

          <v-btn class="button" depressed color="#9c27b0" @click="getItems"
            ><span style="color: wheat"> Filter</span>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(item, idx) in items" :key="idx" class="list" cols="3">
        <Card :starship="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "StarWarsList",
  components: { Card },
  data() {
    return {
      items: [],
      search: "",
    };
  },
  mounted() {
    this.getItems();
  },
  methods: {
    async getItems() {
      this.$http
        .get("https://swapi.dev/api/starships/", {
          params: {
            search: this.search,
          },
        })
        .then(
          (response) => (
            (this.items = response.data.results,console.log(response.data.results))
          )
        );
    },
  },
};
</script>
<style scoped>
.button {
  margin-top: 16px;
  margin-left: 12px;
}
.list {
  list-style: none;
}
</style>