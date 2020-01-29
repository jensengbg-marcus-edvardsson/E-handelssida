const express = require('express');
const router = express.Router();
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const database = lowdb(adapter);

router.get('/', (req, res, next) => {
        let products = database.get('products').value();
        res.send(products);
});

// router.post('/', (req, res, next) => {
//     const product = {
//         name: req.body.name,
//         price: req.body.price,
//         img: req.body.img
//     }
//     res.status(201).json({
//         message: 'Hanterar POST requests för /products',
//         createdProduct: product
//     });
// });

// router.get('/:productId', (req, res, next) => {
//     const id = req.params.productID;
//     if (id === 'special') {
//         res.status(200).json({
//             message: 'Detta är ett speciellt ID',
//             id: id
//         });
//     } else {
//         res.status(200).json({
//           message: 'Du har fått ett ID'
//         });
//     }
// });

// router.patch('/:productId', (req, res, next) => {
//     res.status(200).json({
//         message: 'Uppdatera produkt'
//     });
// });

// router.delete('/:productId', (req, res, next) => {
//     res.status(200).json({
//         message: 'Ta bort produkt'
//     });
// });

module.exports = router; 