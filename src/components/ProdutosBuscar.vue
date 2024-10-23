<template>
  <form>
    <input
      type="text"
      name="busca"
      id="busca"
      v-model="buscar"
      placeholder="Buscar..."
    />
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

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}
#busca {
  width: 100%;
  padding: 20px;
  border: none;
}
#busca:focus,
#busca:hover {
  transform: scale(1.1);
}
#lupa {
  width: 62px;
  height: 62px;
  background: url("../assets/ranek-assets/search.svg") no-repeat center center;
  border: initial;
  text-indent: -150px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  box-shadow: none;
}
#lupa:hover {
  transform: scale(1.2);
}
</style>
