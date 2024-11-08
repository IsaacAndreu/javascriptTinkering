<template>
  <div class="users-page">
    <h1>Usuaris</h1>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        <h3>{{ user.firstName }} {{ user.lastName }}</h3>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Telèfon:</strong> {{ user.phone }}</p>
      </li>
    </ul>
    <p v-else>No s'han trobat usuaris.</p>
    <button @click="fetchUsers">Tornar a carregar usuaris</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UsersPage",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        this.users = response.data.users;
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.users-page {
  text-align: center;
}

.users-page ul {
  list-style: none;
  padding: 0;
}

.users-page li {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}
</style>
