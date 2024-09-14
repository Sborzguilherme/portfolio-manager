<template>
  <div>
    <!-- Button to open modal -->
    <button @click="openModal" class="open-modal-btn">Open Form Modal</button>

    <!-- Modal -->
    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h2>Enter Details</h2>

        <!-- Form inside Modal -->
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="date">Date</label>
            <input v-model="formData.date" type="date" id="date" required />
          </div>

          <div class="form-group">
            <label for="name">Name</label>
            <input
              v-model="formData.name"
              type="text"
              id="name"
              placeholder="Enter name"
              required
            />
          </div>

          <div class="form-group">
            <label for="category">Category</label>
            <input
              v-model="formData.category"
              type="text"
              id="category"
              placeholder="Enter category"
              required
            />
          </div>

          <div class="form-group">
            <label for="amount">Amount</label>
            <input
              v-model="formData.amount"
              type="number"
              id="amount"
              placeholder="Enter amount"
              required
            />
          </div>

          <div class="form-group">
            <label for="installments">Installments</label>
            <input
              v-model="formData.installments"
              type="number"
              id="installments"
              placeholder="Enter installments"
              required
            />
          </div>

          <div class="modal-actions">
            <button type="submit" class="submit-btn">Submit</button>
            <button type="button" class="cancel-btn" @click="closeModal">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
      formData: {
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
    submitForm() {
      // Handle form submission here
      console.log("Form submitted:", this.formData);

      // Close modal and reset form after submission
      this.closeModal();
    },
    resetForm() {
      this.formData = {
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

<style scoped>
/* Modal Overlay */
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

/* Modal Content */
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

/* Form Styles */
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

/* Modal Actions */
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

/* Button to open modal */
.open-modal-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
