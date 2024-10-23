<template>
  <form>
    <input type="text" name="busca" id="busca" v-model="buscar" />
    <input
      type="submit"
      id="lupa"
      value="buscar"
      @click.prevent="buscarProdutos"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      buscar: "",
    };
  },
  methods: {
    buscarProdutos() {
      // Evitar que de duplicação de busca
      if (this.buscar !== (this.$route.query.id || "")) {
        //o $router.push() vai fazer a alteração da url da busca do produto.
        this.$router.push({
          // O "q" é a busca do produto e vai chamar a buscar do v-model do input de busca
          // Que ira para component ProdutosLista fazer a busca do item no fecth
          query: { id: this.buscar.toLowerCase() },
        });
      }
    },
  },
};
</script>

<style></style>
