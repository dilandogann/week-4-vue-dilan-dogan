<template>
  <div class="hello">
    <h1>Welcome to the universe</h1>
    <star-wars-list/>
  </div>
</template>

<script>
import StarWarsList from './StarWarsList.vue'
export default {
  name: "HelloWorld",
  components:{StarWarsList},
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
