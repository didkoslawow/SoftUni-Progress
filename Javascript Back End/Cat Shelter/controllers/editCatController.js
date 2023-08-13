const { getCatById } = require('../services/catsService.js');

const router = require('express').Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const cat = getCatById(id);

    res.render('editCat', { cat });
});

module.exports = router;