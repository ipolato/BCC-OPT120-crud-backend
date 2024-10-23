const db = require("../config/database");

// ==> Método responsável por criar um novo 'Produto':

exports.createProduct = async (req, res) => {
    const { nome, estoque, preco, data } = req.body;
    const { rows } = await db.query(
        'INSERT INTO produtos(nome, estoque, preco, pData) VALUES ($1, $2, $3, $4)',
        [nome, estoque, preco, data]
    );

    res.status(201).send({
        message: "Produto adicionado!",
        body: {
            produto: { nome, estoque, preco, data }
        },
    });
};

// ==> Método responsável por listar todos os 'Products':
exports.listAllProducts = async (req, res) => {
    const response = await db.query(
        'SELECT * FROM produtos ORDER BY nome ASC'
    );

    res.status(200).send(response.rows);
};


// ==> Método responsável por selecionar 'Product' pelo 'Id':
exports.findProductById = async (req, res) => {
    const produtoId = parseInt(req.params.id);

    const response = await db.query(
        'SELECT * FROM produtos WHERE id = $1', 
        [produtoId]
    );

    res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar um 'Product' pelo 'Id':
exports.updateProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    const { nome, estoque, preco, data } = req.body;

    const response = await db.query(
        'UPDATE produtos SET nome = $1, estoque = $2, preco = $3, pdata = $4 WHERE id = $5',
        [nome, estoque, preco, data, productId]
    );

    res.status(200).send({ message: "Produto Atualizado!" });
};

// ==> Método responsável por excluir um 'Product' pelo 'Id':
exports.deleteProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    await db.query(
        'DELETE FROM produtos WHERE id = $1',
        [productId]
    );

    res.status(200).send({ message: 'Produto removido!', productId });
};