<template>
  <section>
    <h1>👍Compre ou Venda👎</h1>
    <ProdutosBuscar />
    <ProdutosLista />
  </section>
</template>

<script>
import ProdutosLista from "@/components/ProdutosLista";
import ProdutosBuscar from "@/components/ProdutosBuscar";

export default {
  name: "HomePage",
  components: { ProdutosLista, ProdutosBuscar },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  color: #87f;
  margin-top: 40px;
  text-align: center;
}
</style>
