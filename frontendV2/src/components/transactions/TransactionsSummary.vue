<template>
  <div
    class="grid grid-cols-3 bg-white rounded-xl border border-alpha-black-25 shadow-xs px-4 divide-x divide-alpha-black-100"
  >
    <div class="p-4 space-y-2">
      <p class="text-sm text-gray-500">Total transactions</p>
      <p class="text-gray-900 font-medium text-xl" id="total-transactions">
        {{ count }}
      </p>
    </div>
    <div class="p-4 space-y-2">
      <p class="text-sm text-gray-500">Income</p>
      <p class="text-gray-900 font-medium text-xl" id="total-income">
        R${{ income }}
      </p>
    </div>
    <div class="p-4 space-y-2">
      <p class="text-sm text-gray-500">Expenses</p>
      <p class="text-gray-900 font-medium text-xl" id="total-expense">
        ${{ expenses }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0,
    },
    income: {
      type: Number,
      default: 0,
    },
    expenses: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss">
.grid {
  display: grid;
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.rounded-xl {
  border-radius: 12px;
}

.border {
  border-width: 1px;
}

.border-alpha-black-25 {
  border-color: hsla(0, 0%, 4%, 0.03);
}

.shadow-xs {
  --tw-shadow: 0px 1px 2px 0px hsla(0, 0%, 4%, 0.05);
  --tw-shadow-colored: 0px 1px 2px 0px var(--tw-shadow-color);
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.p-4 {
  padding: 1rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity));
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
  margin-top: calc(1rem * (1 - var(--tw-space-y-reverse)));
}
</style>
