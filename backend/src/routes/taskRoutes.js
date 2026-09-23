const express = require('express');
const router = express.Router();
const { Task } = require('../models');

// Taskleri getir
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Taskleri getirirken hata oluştu' });
    }
});

// Tek task getir
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task bulunamadı' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Task getirirken hata oluştu' });
    }
});

// Yeni task oluştur
router.post('/', async (req, res) => {
    try {
        const task = await Task.create({ title: req.body.title, listId: req.body.listId });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Task oluştururken hata oluştu' });
    }
});

// Task güncelle
router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task bulunamadı' });
        }
        await task.update({ title: req.body.title, listId: req.body.listId });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Task güncellenirken hata oluştu' });
    }
});

// Task sil     
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task bulunamadı' });
        }
        await task.destroy();
        res.json({ message: 'Task başarıyla silindi' });
    }
    catch (error) {
        res.status(500).json({ error: 'Task silinirken hata oluştu' });
    }
});
module.exports = router;