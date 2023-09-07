const express = require('express');
const Books = require('../../model/books')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        
    } catch (e) {
        res.status(500).json(e);
    }
})

module.exports = router;