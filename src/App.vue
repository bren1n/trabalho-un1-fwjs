<template>
  <div class="card">
    <Card :state="state" :title="title" :options="options" @vote="vote" />
  </div>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Card,
  },
  data: () => ({
    state: 'open',
    title: 'Isso é um projeto Vue?',
    options: [{name: 'Sim', votes: 0}, {name: 'Não', votes: 0}]
  }),
  methods: {
    vote(index) {
        this.state = 'closed'
        this.options[index].votes++
    }
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
