<template>
  <div class="card">
    <Card />
  </div>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Card,
  },
};
</script>

<style>
.card {
  background-color: azure;
  padding: 15px;
  border-radius: 10px;
  margin: 15px;
}
</style>
