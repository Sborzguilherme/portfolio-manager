<template>
  <div>
    <form @submit.prevent="handleSubmit">
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

      <label> Amount: </label>
      <input type="number" step="0.01" required v-model="amount" />

      <div class="submit">
        <button>Save</button>
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
      amount: 0,
    };
  },
  methods: {
    handleSubmit() {
      console.log("Submitted");
      console.log(this.date);
      console.log(this.category);
      console.log(this.description);
      console.log(this.amount);
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

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

.submit {
  text-align: center;
}

.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
