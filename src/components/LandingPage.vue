<template>
  <div class="landing-page">
    <section class="intro">
      <div class="intro-text">
        <h1>Benvingut al projecte JavaScript</h1>
        <p>
          Aquesta aplicació et permet navegar a través de diverses funcionalitats, incloent una calculadora i la visualització de comentaris i usuaris. Cada secció t'ofereix una experiència única.
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
        <img src="../assets/comments.png" alt="Comentaris" />
        <h3>Comentaris</h3>
        <p>Veu els comentaris de l'API de JSONPlaceholder per obtenir dades de comentaris ficticis.</p>
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
  display: flex; /* Flexbox per a la secció d'introducció */
  align-items: center; /* Centra verticalment el contingut */
  margin-bottom: 50px; /* Espai per sota de la secció d'introducció */
}

.intro-text {
  flex: 1; /* Ocupa el 50% de l'amplada */
  padding: 20px; /* Espai intern */
  text-align: left; /* Text alineat a l'esquerra */
}

.intro-image img {
  max-width: 100%; /* L'imatge ocupa el 100% de l'amplada del contenidor */
  height: auto; /* Manté l'aspecte de l'imatge */
  border-radius: 8px; /* Cantons arrodonits */
}

.image-container {
  display: flex; /* Flexbox per a disposar les imatges */
  justify-content: space-between; /* Espai uniformement distribuït entre les imatges */
  flex-wrap: wrap; /* Permet que els elements es puguin trencar a la següent línia */
  gap: 20px; /* Espai entre les imatges */
}

.image-box {
  flex: 1; /* Cada caixa ocupa la mateixa amplada */
  display: flex; /* Flexbox per centrar el contingut dins de la caixa */
  flex-direction: column; /* Apila els elements verticalment */
  align-items: center; /* Centra els elements horitzontalment */
  justify-content: flex-start; /* Col·loca els elements al principi */
  min-width: 250px; /* Amplada mínima per a cada caixa d'imatge */
  padding: 20px; /* Espai intern */
  background-color: #ffffff; /* Fons blanc per a cada caixa */
  border-radius: 8px; /* Cantons arrodonits */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Ombra per a les caixes */
  transition: transform 0.3s; /* Efecte de transició */
}

.image-box:hover {
  transform: scale(1.05); /* Efecte d'escala al passar el ratolí */
}

.image-box img {
  width: 100%; /* Ample de la imatge al 100% de la caixa */
  height: 150px; /* Altura fixa per a les imatges */
  object-fit: cover; /* Cobreix l'àrea sense deformar la imatge */
  border-radius: 8px; /* Cantons arrodonits per a les imatges */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Ombra per a les imatges */
}

.image-box h3 {
  color: #2c3e50; /* Color del títol de les imatges */
  margin-top: 10px; /* Espai per sobre del text */
}

.image-box p {
  color: #7f8c8d; /* Color del text descriptiu */
  font-size: 0.9em; /* Mida del text */
  margin-top: 5px; /* Espai per sobre del text */
}
</style>
