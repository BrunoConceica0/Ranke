<template>
  <section class="produtos-container">
    <div v-if="produtos && produtos.length > 0" class="produtos">
      <div v-for="produto in produtos" :key="produto.id" class="produto">
        <router-link to="/">
          <img
            v-if="produto.fotos"
            :src="produto.fotos[0].src"
            :alt="produto.fotos[0].titulo"
          />
          <h2 class="titulo">{{ produto.nome }}</h2>
          <p class="preco">{{ produto.preco }}</p>
          <p class="descricao">{{ produto.descricao }}</p>
        </router-link>
      </div>
    </div>
    <div v-else-if="produtos && produtos.length === 0" class="sem-resultados">
      <p>Busca sem resultado. Tente buscar outro termo.</p>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { serialize } from "@/helpers";
export default {
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9,
    };
  },
  computed: {
    url() {
      // tem que colocar o ? para fazer limitar quantidade de produtos, sendo assim, se ouver mais de 9, da para fazer um paginação
      const query = serialize(this.$route.query);

      return `/produto?_limit=${this.produtosPorPagina}${
        query ? "&" + query : ""
      }`;
    },
  },
  methods: {
    // Fecth usando com sem usar o then e conferir se existe o url
    // async getProdutos() {
    //   try {
    //     const response = await fetch("http://localhost:3000/produto");
    //     const data = await response.json();
    //     this.produtos = data;
    //   } catch (error) {
    //     console.log("Erro de busca produtos:", error);
    //   }
    // },
    async getProdutos() {
      // o medoto get não é ativdo, tem colocar no função watch para que toda vez que url mudar
      try {
        const response = await api.get(this.url);
        this.produtos = response.data;
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    },
  },
  watch: {
    //  é assistido a url, toda vez que mudar
    url() {
      this.getProdutos();
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style scoped>
.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
}
.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 30px;
}
.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}
.produto:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  position: relative;
  z-index: 1;
}
.produto img {
  width: 100%;
  border-radius: 4px;
  margin-bottom: 20px;
}
.titulo {
  margin-bottom: 10px;
}
.preco {
  font-weight: bold;
  color: #e80;
}
.sem-resultados {
  text-align: center;
  
}
</style>
