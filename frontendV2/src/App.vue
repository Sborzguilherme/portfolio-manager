<template>
  <div class="app">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Content -->
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
:root {
  --primary: #de794a;
  --grey: #64748b;
  --dark: #040f22;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
