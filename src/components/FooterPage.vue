<template>
  <footer class="footer">
    <p>Creada per Isaac Andreu &copy; {{ new Date().getFullYear() }}</p>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
  data() {
    return {
      new: Date(),
    };
  },
};
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: white;
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
