<template>
  <main class="transactions-page">
    <h1>Transactions</h1>
    <TransactionsSummary />

    <!-- <li v-for="transaction in transactions" :key="transaction">
      {{ transaction.date }} - {{ transaction.name }} -
      {{ transaction.category }} -
      {{ transaction.amount }}
    </li> -->
  </main>
</template>

<script>
import TransactionsSummary from "../components/transactions/TransactionsSummary.vue";
export default {
  components: {
    TransactionsSummary,
  },
  data() {
    return {
      transactions: [
        {
          date: "2021-01-01",
          name: "5Andar",
          category: "Aluguel",
          amount: 1000,
        },
        {
          date: "2021-01-02",
          name: "Condor",
          category: "Mercado",
          amount: 400,
        },
      ],
      transactionsSummary: {
        total: 3,
        income: 100,
        expenses: 2100,
      },
    };
  },
};
</script>

<style lang="scss">
.transaction-summary {
  text-size-adjust: 100%;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
  tab-size: 4;
  -webkit-tap-highlight-color: transparent;
  line-height: inherit;
  box-sizing: border-box;
  border-style: solid;
  border-image: initial;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(46, 144, 250, 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
  --tw-contain-size: ;
  --tw-contain-layout: ;
  --tw-contain-paint: ;
  --tw-contain-style: ;
  display: grid;
  grid-template-columns: repeat(3, minmax(0px, 1fr));
  border-radius: 12px;
  border-width: 1px;
  border-color: rgba(10, 10, 10, 0.03);
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  --tw-shadow: 0px 1px 2px 0px hsla(0, 0%, 4%, 0.05);
  --tw-shadow-colored: 0px 1px 2px 0px var(--tw-shadow-color);
  --tw-space-y-reverse: 0;
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
  margin-top: calc(1rem * (1 - var(--tw-space-y-reverse)));
}

.transaction-summary-item {
  border-width: 0px;
  border-color: rgb(229, 229, 229);
  padding: 1rem;
}

.transaction-summary-item-title {
  box-sizing: border-box;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(229, 229, 229);
  margin: 0px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity));
}

.transaction-summary-item-content {
  box-sizing: border-box;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(229, 229, 229);
  margin: 0px;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(20 20 20 / var(--tw-text-opacity));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
  margin-top: calc(0.5rem * (1 - var(--tw-space-y-reverse)));
}
</style>
