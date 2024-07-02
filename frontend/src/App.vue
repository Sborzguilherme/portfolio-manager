<template>
  <SignupFormVue />
</template>

<script lang="ts">
import SignupFormVue from "./components/SignupForm.vue";

export default {
  name: "App",
  components: {
    SignupFormVue,
  },
};
</script>

<style>
body {
  margin: 0;
  background: #eee;
}
</style>
