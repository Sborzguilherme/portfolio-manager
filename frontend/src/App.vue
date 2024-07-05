<template>
  <CreateExpense />
</template>

<script lang="ts">
import CreateExpense from "./components/CreateExpense.vue";

export default {
  name: "App",
  components: {
    CreateExpense,
  },
};
</script>

<style>
body {
  margin: 0;
  background: #eee;
}
</style>
