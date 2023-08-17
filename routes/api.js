const express = require('express');
const router = express.Router();
const {TravelData} = require('../models/travelData');

// POST: /api/post
router.post('/post', async (req, res) => {
  try {
    const newTravelData = new TravelData(req.body);
    await newTravelData.save();
    res.status(201).json(newTravelData);
  } catch (error) {
    console.error('Error posting data:', error);
    res.status(500).send('Server Error');
  }
});

// GET: /api/retrieve
router.get('/retrieve', async (req, res) => {
  try {
    const travelData = await TravelData.find();
    res.status(200).send({"data":travelData});

  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Server Error');
  }
});

// DELETE: /api/delete/:id
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedData = await TravelData.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedData);
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).send('Server Error');
  }
});

router.get('/api/sort', async (req, res) => {
  const { sortBy } = req.query;
  let sortedData;
  try {
   
    if (sortBy === 'budget') {
      sortedData = await TravelData.find().sort({ budget: 1 });
    } 
    res.send({"data":sortedData});
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
module.exports = router;

