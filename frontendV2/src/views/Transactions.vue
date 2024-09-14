<template>
  <main class="grow px-20 py-6 h-full overflow-y-auto">
    <div class="space-y-4 h-full flex flex-col overflow-y-auto">
      <TransactionsHeader />

      <TransactionsSummary
        :count="transactionsSummary.count"
        :income="transactionsSummary.income"
        :expenses="transactionsSummary.expenses"
      />

      <TransactionsList />
    </div>
  </main>
</template>

<script>
import TransactionsHeader from "../components/transactions/TransactionsHeader.vue";
import TransactionsSearch from "../components/transactions/TransactionsSearch.vue";
import TransactionsSummary from "../components/transactions/TransactionsSummary.vue";
import TransactionsList from "../components/transactions/TransactionsList.vue";
export default {
  components: {
    TransactionsSummary,
    TransactionsList,
    TransactionsHeader,
    TransactionsSearch,
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
        count: 7,
        income: 100,
        expenses: 2100,
      },
    };
  },
};
</script>

<style lang="scss">
.grow {
  flex-grow: 1;
}
.px-20 {
  padding-left: 5rem;
  padding-right: 5rem;
}
.py-6 {
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
}
.h-full {
  height: 100%;
}
.overflow-y-auto {
  overflow-y: auto;
}
.flex-col {
  flex-direction: column;
}
.flex {
  display: flex;
}
</style>
