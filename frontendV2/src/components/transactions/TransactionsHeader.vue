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

        <button
          @click="openModal"
          class="rounded-lg bg-gray-900 text-white flex items-center gap-1 justify-center px-3 py-2"
        >
          <span class="material-icons">add</span>
          <span class="text-sm font-medium">New Transaction</span>
        </button>
      </div>
    </div>

    <!-- Modal for adding new transaction -->
    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h2>Add New Transaction</h2>

        <!-- Form inside Modal -->
        <form @submit.prevent="submitTransaction">
          <div class="form-group">
            <label for="date">Date</label>
            <input
              v-model="newTransaction.date"
              type="date"
              id="date"
              required
            />
          </div>

          <div class="form-group">
            <label for="name">Name</label>
            <input
              v-model="newTransaction.name"
              type="text"
              id="name"
              placeholder="Enter name"
              required
            />
          </div>

          <div class="form-group">
            <label for="category">Category</label>
            <input
              v-model="newTransaction.category"
              type="text"
              id="category"
              placeholder="Enter category"
              required
            />
          </div>

          <div class="form-group">
            <label for="amount">Amount</label>
            <input
              v-model="newTransaction.amount"
              type="number"
              id="amount"
              placeholder="Enter amount"
              required
            />
          </div>

          <div class="form-group">
            <label for="installments">Installments</label>
            <input
              v-model="newTransaction.installments"
              type="number"
              id="installments"
              placeholder="Enter installments"
              required
            />
          </div>

          <div class="modal-actions">
            <button type="submit" class="submit-btn">Add Transaction</button>
            <button type="button" class="cancel-btn" @click="closeModal">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
      transactions: [
        {
          date: "2024-09-01",
          name: "Grocery Shopping",
          category: "Groceries",
          amount: 100,
          installments: 2,
        },
        {
          date: "2024-09-02",
          name: "Electricity Bill",
          category: "Utilities",
          amount: 75,
          installments: 1,
        },
      ],
      newTransaction: {
        date: "",
        name: "",
        category: "",
        amount: null,
        installments: null,
      },
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.resetForm();
    },
    submitTransaction() {
      // Add new transaction to the list
      this.transactions.push({ ...this.newTransaction });

      // Close modal and reset form after submission
      this.closeModal();
    },
    resetForm() {
      this.newTransaction = {
        date: "",
        name: "",
        category: "",
        amount: null,
        installments: null,
      };
    },
  },
};
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

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-content h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.submit-btn,
.cancel-btn {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn {
  background-color: #28a745;
  color: white;
}

.cancel-btn {
  background-color: #dc3545;
  color: white;
}
</style>
