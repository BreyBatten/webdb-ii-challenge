const express = require('express');

const db = require('../data/db-config');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cars = await db('cars');
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve cars' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const car = await db('cars').where({ id });
        res.json(car);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve that car' });
    }
});

router.post('/', async (req, res) => {
    try {
        const carData = req.body;
        const [id] = await db('cars').insert(carData);
        const newCar = await db('cars').where({ id });
        res.status(201).json(newCar);
    } catch (error) {
        console.log("POST Error", error);
        res.status(500).json({ message: "Failed to store data" });
    }
});

module.exports = router;