export function serialize(obj) {
  // vai me retunr a url da busca do produto do component ProdutosBuscar
  // Tem que serelizar o valor da busca do produto, deixando deseje jeito para colocar na função de getProdutos (http://localhost:8080/?q=notebook)
  if (!obj || Object.keys(obj).length === 0) {
    return "";
  }
  return Object.entries(obj)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
}
