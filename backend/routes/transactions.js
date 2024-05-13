const router = require('express').Router()



router.get('/', (req, res) => {
    res.send('TA FUNCIONANDO')
})

module.exports = router