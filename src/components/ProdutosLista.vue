<template>
  <section class="produto-container">
    <div v-for="produto in produtos" :key="produto.id">
      <img
        v-if="produto.fotos"
        :src="produto.fotos[0].src"
        :alt="produto.fotos[0].titulo"
      />
      <h2 class="titulo">{{ produto.nome }}</h2>
      <p class="preco">{{ produto.preco }}</p>
      <p class="descricao">{{ produto.descricao }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      produtos: null,
    };
  },
  methods: {
    // Fecth usando com sem usar o then e conferir se existe o url
    async getProdutos() {
      try {
        const response = await fetch("http://localhost:3000/produto");
        const data = await response.json();
        this.produtos = data;
      } catch (error) {
        console.log("Erro de busca produtos:", error);
      }
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style></style>
