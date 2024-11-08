<template>
  <div class="landing-page">
    <section class="intro">
      <div class="intro-text">
        <h1>Benvingut al projecte JavaScript</h1>
        <p>
          Aquesta aplicació et permet navegar a través de diverses funcionalitats, incloent una calculadora i la visualització d'usuaris. Cada secció t'ofereix una experiència única.
        </p>
      </div>
      <div class="intro-image">
        <img src="../assets/intro-image.png" alt="Imatge d'introducció" />
      </div>
    </section>

    <section class="image-container">
      <div class="image-box">
        <img src="../assets/calculator.png" alt="Calculadora" />
        <h3>Calculadora</h3>
        <p>Realitza operacions matemàtiques bàsiques com suma, resta, multiplicació i divisió.</p>
      </div>
      <div class="image-box">
        <img src="../assets/users.png" alt="Usuaris" />
        <h3>Usuaris</h3>
        <p>Accedeix a la informació d'usuaris amb dades reals d'una API de demostració.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped>
.landing-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin: 50px 20px;
}

.intro {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}

.intro-text {
  flex: 1;
  padding: 20px;
  text-align: left;
}

.intro-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.image-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.image-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-width: 250px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.image-box:hover {
  transform: scale(1.05);
}

.image-box img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.image-box h3 {
  color: #2c3e50;
  margin-top: 10px;
}

.image-box p {
  color: #7f8c8d;
  font-size: 0.9em;
  margin-top: 5px;
}
</style>
