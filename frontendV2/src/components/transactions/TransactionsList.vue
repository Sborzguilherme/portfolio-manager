<template>
  <div class="table-container">
    <!-- Search and Filter -->
    <div class="controls">
      <div class="grow">
        <input
          v-model="searchName"
          placeholder="Search by Name"
          class="search-input"
        />
      </div>

      <select v-model="selectedCategory" class="category-select">
        <option value="">All Categories</option>
        <option
          v-for="category in uniqueCategories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>

    <!-- Table -->
    <table class="styled-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Installments</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in paginatedData" :key="index">
          <td>{{ row.date }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.category }}</td>
          <td>{{ row.amount }}</td>
          <td>{{ row.installments }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination Controls -->
    <div class="pagination-controls">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchName: "",
      selectedCategory: "",
      currentPage: 1,
      rowsPerPage: 3,
      tableData: [
        {
          date: "2024-09-01",
          name: "John Doe",
          category: "Groceries",
          amount: 100,
          installments: 2,
        },
        {
          date: "2024-09-02",
          name: "Jane Doe",
          category: "Electronics",
          amount: 250,
          installments: 3,
        },
        {
          date: "2024-09-03",
          name: "Mark Smith",
          category: "Utilities",
          amount: 75,
          installments: 1,
        },
        {
          date: "2024-09-04",
          name: "Alice Johnson",
          category: "Groceries",
          amount: 50,
          installments: 1,
        },
        {
          date: "2024-09-05",
          name: "Bob Martin",
          category: "Clothing",
          amount: 150,
          installments: 4,
        },
        {
          date: "2024-09-06",
          name: "Charlie Brown",
          category: "Entertainment",
          amount: 200,
          installments: 3,
        },
      ],
    };
  },
  computed: {
    uniqueCategories() {
      const categories = this.tableData.map((row) => row.category);
      return [...new Set(categories)];
    },
    filteredData() {
      return this.tableData.filter((row) => {
        const matchesName = row.name
          .toLowerCase()
          .includes(this.searchName.toLowerCase());
        const matchesCategory = this.selectedCategory
          ? row.category === this.selectedCategory
          : true;
        return matchesName && matchesCategory;
      });
    },
    totalPages() {
      return Math.ceil(this.filteredData.length / this.rowsPerPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.rowsPerPage;
      const end = start + this.rowsPerPage;
      return this.filteredData.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script>

<style scoped>
.grow {
  flex-grow: 1;
}
.table-container {
  width: 100%;

  margin: 0 auto;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  gap: 0.5rem;
}

.search-input {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  width: 100%;
}
.category-select {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px;
  border: 1px solid #ddd;
}

.styled-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.styled-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.pagination-controls {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination-controls button {
  padding: 8px 12px;
  margin: 0 5px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

.pagination-controls button:disabled {
  background-color: #ccc;
}

.pagination-controls span {
  font-size: 16px;
}
</style>
