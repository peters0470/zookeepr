const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeeperroutes = require('../apiRoutes/zookeeperRoutes');

router.use(animalRoutes);
router.use(zookeeperroutes);

module.exports = router;