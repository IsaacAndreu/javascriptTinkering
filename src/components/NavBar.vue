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
  display: flex; /* Flexbox per al disseny horitzontal */
  justify-content: center; /* Centra el contingut horitzontalment */
}

.navbar ul {
  list-style: none;
  padding: 0;
  display: flex; /* Flexbox per als elements de la llista */
  gap: 20px; /* Espai entre els elements */
}

.navbar li {
  margin: 0; /* Elimina el marge per a un millor alineament */
}

.navbar a {
  color: white;
  text-decoration: none;
  padding: 8px 16px; /* Espai al voltant dels enllaços */
  transition: background-color 0.3s; /* Efecte de transició per al fons */
}

.navbar a:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Fons al passar el ratolí */
}

/* Responsive */
@media (max-width: 600px) {
  .navbar ul {
    flex-direction: column; /* Canvia a vertical en pantalles petites */
    align-items: center; /* Centra els elements */
  }
}
</style>
