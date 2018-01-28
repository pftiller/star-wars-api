const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const favoriteSchema = require('../modules/favorite.schema');

let Favorite = mongoose.model('Favorite', favoriteSchema);

// GET 
router.get('/', (req, res) => {
    Favorite.find({}, (error, storedFavorite) => {
        if (error) {
            console.log('error: ', error);
            res.sendStatus(500);
        } else {
            console.log('found: ', storedFavorite);
            res.send(storedFavorite);
        }
    }); 
}); 

// POST
router.post('/', (req, res) => {
    console.log('new entry to be added: ', req.body);
    let newFavorite = new Favorite(req.body);
    newFavorite.save( (error, newStoredFavorite) => {
        if (error) {
            console.log('error: ', error);
            res.sendStatus(500);            
        } else {
            console.log('success: ', newStoredFavorite);            
            res.sendStatus(201);
        }
    }); 
    
}); 

module.exports = router;