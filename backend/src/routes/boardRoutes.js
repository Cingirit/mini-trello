const express = require('express');
const router = express.Router();
const { Board, List,Task } = require('../models');

// Boardları getir
router.get('/', async (req, res) => {
    try {
        const boards = await Board.findAll();
        res.json(boards);
    } catch (error) {
        res.status(500).json({ error: 'Boardları getirirken hata oluştu' });
    }
});

// Tek board getir
router.get('/:id', async (req, res) => {
    try {
        const board = await Board.findByPk(req.params.id, { include: [{ model: List, include: [Task] }] });
        if (!board) {
            return res.status(404).json({ error: 'Board bulunamadı' });
        }
        res.json(board);
    } catch (error) {
        res.status(500).json({ error: 'Board getirirken hata oluştu' });
    }
});

// Yeni board oluştur
router.post('/', async (req, res) => {
    try {
        const board = await Board.create({ title: req.body.title });
        res.status(201).json(board);
    }
    catch (error) {
        res.status(500).json({ error: 'Board oluştururken hata oluştu' });
    }
});

// Board güncelle
router.put('/:id', async (req, res) => {
    try {
        const board = await Board.findByPk(req.params.id);
        if (!board) {
            return res.status(404).json({ error: 'Board bulunamadı' });
        }
        await board.update({ title: req.body.title });
        res.json(board);
    } catch (error) {
        res.status(500).json({ error: 'Board güncelleirken hata oluştu' });
    }
});

// Board sil
router.delete('/:id', async (req, res) => {
    try {
        const board = await Board.findByPk(req.params.id);
        if (!board) {
            return res.status(404).json({ error: 'Board bulunamadı' });
        }
        await board.destroy();
        res.json({ message: 'Board silindi' });
    } catch (error) {
        res.status(500).json({ error: 'Board silerken hata oluştu' });
    }
});

module.exports = router;