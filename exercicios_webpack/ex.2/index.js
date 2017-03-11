const produto = {
  nome: 'Caneta Bic Preta',
  preco: 1.90,
  desconto: 0.05
}

function clone(objeto) {
  // utilizando o operador spread - espalha os atributos do objeto no novo objeto
  return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Esferografica'

console.log(produto, novoProduto)