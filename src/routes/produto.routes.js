const router = require('express-promise-router')();
const produtoController = require('../controllers/produto.controller');

// ==> Definindo as rotas do CRUD - 'Produto':

// ==> Rota responsável por criar um novo 'Produto': (POST): localhost:5000/api/produto
router.post('/produto', produtoController.createProduct);

// ==> Rota responsável por listar todos os 'Produtos': (GET): localhost:5000/api/produtos
router.get('/produtos', produtoController.listAllProducts);

// ==> Rota responsável por selecionar 'Produto' pelo 'Id': (GET): localhost:5000/api/produto/:id
router.get('/produto/:id', produtoController.findProductById);

// ==> Rota responsável por atualizar 'Produto' pelo 'Id': (PUT): localhost: 3000/api/produto/:id
router.put('/produto/:id', produtoController.updateProductById);

// ==> Rota responsável por excluir 'Product' pelo 'Id': (DELETE): localhost:3000/api/products/:id
router.delete('/produto/:id', produtoController.deleteProductById);

module.exports = router;