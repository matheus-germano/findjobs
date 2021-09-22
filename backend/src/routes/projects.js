const router = require('express').Router();
const verifyToken = require('../middlewares/verifyToken');

router.get('/list', verifyToken, (req, res) => {
  return res.status(200).send('Projects list');
});

module.exports = router;