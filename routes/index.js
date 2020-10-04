const express = require('express');
const router = express.Router();
const myData = require('../data');

router.get('/', (req, res) => { //เรียกใช้ตัวแปร router อ่าน พารามิเตอร์
    res.render('index', { myData });
});

router.get('/education', (req, res) => {
    res.render('education', { myData });
});

router.get('/workexperience', (req, res) => {

    res.render('workexperience', {
        myData,
        helpers: {
            experience: function() {
                let currentYear = new Date().getFullYear();
                let exp = Number.parseInt(currentYear) - 2016;
                return exp;
            }
        }
    });
});


router.get('/skills', (req, res) => {
    res.render('skills', { myData });
});

module.exports = router;