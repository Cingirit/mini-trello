const express = require('express');
const router = express.Router();
const {  List,Task } = require('../models');

// Listeleri getir
router.get('/', async (req, res) => {
    try {
        const lists = await List.findAll();
        res.json(lists);
    } catch (error) {
        res.status(500).json({ error: 'Listeleri getirirken hata oluştu' });
    }
});

// Tek liste getir  
router.get('/:id', async (req, res) => {
    try {
        const list = await List.findByPk(req.params.id, { include: Task });
        if (!list) {
            return res.status(404).json({ error: 'Liste bulunamadı' });
        }
        res.json(list);
    } catch (error) {
        res.status(500).json({ error: 'Liste getirirken hata oluştu' });
    }
});

// Yeni liste oluştur
router.post('/', async (req, res) => {
    try {
        const list = await List.create({ title: req.body.title, boardId: req.body.boardId });
        res.status(201).json(list);
    } catch (error) {
        res.status(500).json({ error: 'Liste oluştururken hata oluştu' });
    }
});

// Liste güncelle
router.put('/:id', async (req, res) => {
    try {
        const list = await List.findByPk(req.params.id);
        if (!list) {
            return res.status(404).json({ error: 'Liste bulunamadı' });
        }
        await list.update({ title: req.body.title });
        res.json(list);
    } catch (error) {
        res.status(500).json({ error: 'Liste güncellenirken hata oluştu' });
    }
});

// Liste sil
router.delete('/:id', async (req, res) => {
    try {
        const list = await List.findByPk(req.params.id);
        if (!list) {
            return res.status(404).json({ error: 'Liste bulunamadı' });
        }
        await list.destroy();
        res.json({ message: 'Liste başarıyla silindi' });
    } catch (error) {
        res.status(500).json({ error: 'Liste silerken hata oluştu' });
    }   
});

module.exports = router;