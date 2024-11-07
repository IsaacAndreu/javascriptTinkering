<template>
  <div class="comments-page">
    <h1>Comentaris</h1>
    <ul v-if="comments && comments.length">
      <li v-for="comment in comments" :key="comment.id">
        <h3>{{ comment.name }}</h3>
        <p>{{ comment.body }}</p>
        <p><strong>Email:</strong> {{ comment.email }}</p>
      </li>
    </ul>
    <p v-else-if="!loading && !error">No s'han trobat comentaris.</p>
    <p v-if="error" class="error-message">{{ error }}</p>
    <p v-if="loading">Carregant comentaris...</p>
    <button @click="fetchComments" :disabled="loading">Tornar a carregar comentaris</button>
  </div>
</template>

<script>
export default {
  name: "CommentsPage",
  data() {
    return {
      comments: null, // `null` to differentiate between loading and empty state
      loading: false, // To indicate when comments are being fetched
      error: null, // Holds any error messages
    };
  },
  methods: {
    async fetchComments() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        if (!response.ok) {
          throw new Error("Error en carregar els comentaris");
        }
        this.comments = await response.json();
      } catch (error) {
        this.error = "No s'han pogut carregar els comentaris. Torneu-ho a intentar més tard.";
        this.comments = []; // Set to empty to avoid "loading" message persisting
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchComments();
  },
};
</script>

<style scoped>
.comments-page {
  text-align: center;
}
.comments-page ul {
  list-style: none;
  padding: 0;
}
.comments-page li {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}
.error-message {
  color: red;
  font-weight: bold;
}
</style>
