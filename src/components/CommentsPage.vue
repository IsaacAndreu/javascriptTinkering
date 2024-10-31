<template>
  <div class="comments-page">
    <h1>Comentaris</h1>
    <ul v-if="comments.length">
      <li v-for="comment in comments" :key="comment.id">
        <h3>{{ comment.name }}</h3>
        <p>{{ comment.body }}</p>
        <p><strong>Email:</strong> {{ comment.email }}</p>
      </li>
    </ul>
    <p v-else>No s'han trobat comentaris.</p>
    <button @click="fetchComments">Tornar a carregar comentaris</button>
  </div>
</template>

<script>
export default {
  name: "CommentsPage",
  data() {
    return {
      comments: [],
    };
  },
  methods: {
    async fetchComments() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        if (!response.ok) {
          throw new Error("Error en carregar els comentaris");
        }
        this.comments = await response.json();
      } catch (error) {
        console.error("Error:", error);
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
</style>
