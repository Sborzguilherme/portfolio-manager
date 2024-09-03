<template>
  <header class="flex justify-between items-center text-gray-900 font-medium">
    <h1 class="text-xl">Transactions</h1>

    <div class="flex items-center gap-5">
      <div class="flex items-center gap-2">
        <router-link
          to="/transactions/import"
          class="rounded-lg bg-gray-50 border border-gray-200 flex items-center gap-1 justify-center px-3 py-2"
        >
          <span class="material-icons">upload</span>
          <span class="text-sm font-medium text-gray-900">Import</span>
        </router-link>

        <router-link
          to="/transactions/new"
          class="rounded-lg bg-gray-900 text-white flex items-center gap-1 justify-center px-3 py-2"
        >
          <span class="material-icons">add</span>
          <span class="text-sm font-medium">New Transaction</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.rounded-lg {
  border-radius: 10px;
}
.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(20 20 20 / var(--tw-bg-opacity));
}

.bg-gray-900:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(61 61 61 / var(--tw-bg-opacity));
}

.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
}

.bg-gray-50:hover {
  background-color: rgb(230 230 230);
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.items-center {
  align-items: center;
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(20 20 20 / var(--tw-text-opacity));
}

.font-medium {
  font-weight: 500;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.gap-5 {
  gap: 1.25rem;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-1 {
  gap: 0.25rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.py-2 {
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}

.border {
  border-width: 1px;
}

.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 229 229 / var(--tw-border-opacity));
}
a {
  text-decoration: none;
  color: inherit;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
