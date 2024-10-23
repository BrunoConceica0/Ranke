<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <!--É criado um main para o footer não ficar fixo no topo da tela-->
      <router-view to="/"></router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
export default {
  components: { TheHeader, TheFooter },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
}
html,
body {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #345;
  background: url("./assets/ranek-assets/pattern.svg") repeat top;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
  color: #345;
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
  display: block;
}
body {
  line-height: 1.5;
}
.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
}
.btn:hover {
  background: #65d;
  transform: scale(1.1);
}
#app {
  /* Colocar o footer em baixo do conteudo */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#main {
  /*aqui é para o footer ficar em baixo do conteudo */
  flex: 1;
}
input,
textarea {
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
}
input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #87f;
}
</style>
