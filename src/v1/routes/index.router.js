const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})



router.get('/api/user', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok',
        metadata: [
            {
                name: 'user1',
                age: '30',
            },
            {
                name: 'user2',
                age: '31',
            }, {
                name: 'user3',
                age: '32',
            }
        ]
    })
})

module.exports = router;