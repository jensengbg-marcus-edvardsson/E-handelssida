const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Ordrar hämtade'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'Ordrar skapade',
        order: order

    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order-detaljer',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order togs bort',
        orderId: req.params.orderId
    });
});

module.exports = router; 