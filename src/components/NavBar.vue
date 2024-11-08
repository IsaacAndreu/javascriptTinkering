<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Inici</router-link></li>
      <li><router-link to="/calculator">Calculadora</router-link></li>
      <li><router-link to="/comments">Comentaris</router-link></li>
      <li><router-link to="/users">Usuaris</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
}

.navbar ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
}

.navbar li {
  margin: 0;
}

.navbar a {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  transition: background-color 0.3s;
}

.navbar a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

@media (max-width: 600px) {
  .navbar ul {
    flex-direction: column;
    align-items: center;
  }
}
</style>
