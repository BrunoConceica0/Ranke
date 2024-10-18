<template>
  <div>
    <footer><p>Ranek. Alguns direitos reservados.</p></footer>
  </div>
</template>

<script>
export default {
  name: "TheFooterComponente",
};
</script>

<style scoped>
footer {
  background: #87f;
  padding: 20px 0;
  text-align: center;
  font-size: 1.2rem;
  color: #fff;
  position: relative;
  top: 75px; /*  Este 75 px é  o tamnaho do contéudo para tira o footer, de abaixo para criar um scroll*/
}
</style>
