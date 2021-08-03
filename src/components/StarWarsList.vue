<template>
  <v-container>
    <v-row>
      <v-col cols="4"></v-col>
      <v-col cols="4" >
          <search-filter @filterResults="getItems"></search-filter>
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
import SearchFilter from "./SearchFilter.vue";
import {fetchStarshipData} from "../services/fetchStarshipData"

export default {
  name: "StarWarsList",
  components: { Card ,SearchFilter},
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
    async getItems(event) {
      const items=await fetchStarshipData(event);
      console.log(items)
      this.items=items.results;
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