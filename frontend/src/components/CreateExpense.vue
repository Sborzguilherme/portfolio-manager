<template>
  <div>
    <h3>Add expense</h3>

    <form @submit="handleSubmit">
      <label> Date</label>
      <input type="date" required v-model="date" />

      <label>Category</label>
      <select v-model="category">
        <option value="Transport">Transport</option>
        <option value="Groceries">Groceries</option>
        <option value="Travel">Travel</option>
        <option value="Clothing">Clothing</option>
        <option value="Eatout">Eat out</option>
        <option value="Phone">Phone</option>
        <option value="Rent">Rent</option>
        <option value="Personal">Personal</option>
        <option value="Home">Home</option>
        <option value="Construction">Construction</option>
        <option value="Pharmacy">Pharmacy</option>
        <option value="Enterteinment">Enterteinment</option>
        <option value="Others">Others</option>
      </select>

      <label> Description </label>
      <input type="text" required v-model="description" />

      <label> Value </label>
      <input type="number" step="0.01" required v-model="value" />

      <label> installments </label>
      <input type="number" step="1" v-model="installments" />

      <div class="endButtons">
        <button class="cancelButton">Cancel</button>
        <button class="submitButton">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      category: "",
      description: "",
      value: 0,
      installments: null,
    };
  },
  methods: {
    handleSubmit() {
      fetch("http://localhost:8080/expense", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: this.date,
          category: this.category,
          description: this.description,
          value: this.value,
          installments: this.installments,
        }),
      }).catch((error) => console.log(error));
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

h3 {
  max-width: 420px;
  margin: 20px auto;
  text-align: left;
  padding: 30px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.submitButton {
  background: #2b8608;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 5px;
}

.cancelButton {
  background: #cb250b;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  margin-right: 5px;
  color: white;
  border-radius: 5px;
}

.endButtons {
  text-align: right;
}

.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
