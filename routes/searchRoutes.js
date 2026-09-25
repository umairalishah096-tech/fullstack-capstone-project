const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const { category } = req.query;
    // filter items by category
    const items = [{id: "1", name: "Sofa", category: "Furniture"}];
    const filtered = items.filter(item => item.category === category);
    res.json(filtered);
});

module.exports = router;
