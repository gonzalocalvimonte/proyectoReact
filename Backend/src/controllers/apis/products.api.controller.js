let db = require('../../database/models/index')

module.exports = {
    list: async (req, res) => {
        let products = await db.Products.findAll()
        let productosNuevos = []
        products.forEach(product => {
            product.image = 'http://localhost:3030/images/uploads/products/' + product.image
            productosNuevos.push(product)
        });
        return res.status(200).json({
            total: products.length,
            data: productosNuevos,
            status: 200
        })
    },

    create: async function(req,res){
        console.log(req.body)
    db.Products.create({
            name:req.body.name,
            price:req.body.price,
            description:req.body.description,
            image:req.image,
            category_id:req.body.category_id
        }).then(r =>{
        return res.send(r.dataValues)
        })
         
    },
}