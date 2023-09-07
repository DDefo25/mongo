const express = require('express');
const Books = require('../../model/books')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const books = await Books.find().select('-__v');
        res.json(books);
    } catch (e) {
        res.status(500).json(e);
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const book = await Books.findById(id).select('-__v');
        res.json(book);
    } catch (e) {
        res.status(500).json(e);
    }
})

router.post('/', async (req, res) => {
    const newBook = new Books(req.body)
    try {
        await newBook.save()
        res.json(newBook);
    } catch (e) {
        res.status(500).json(e);
    }
})

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        await Books.findByIdAndUpdate(id, req.body)
        res.redirect(`/api/books/${id}`)
    } catch (e) {
        res.status(500).json(e);
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        await Books.deleteOne({_id: id})
        res.json('ok')
    } catch (e) {
        res.status(500).json(e);
    }
})


module.exports = router;