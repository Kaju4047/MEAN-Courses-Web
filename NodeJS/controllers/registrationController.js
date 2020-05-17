// const { User, validate } = require('../models/user');
//https://vegibit.com/node-js-mongodb-user-registration/
const express = require('express');
const router = express.Router();
var { registration ,validate } = require('../models/registration');
 
router.post('/', async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    // Check if this user already exisits
    let reg = await registration.findOne({ email: req.body.email });
    if (reg) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        reg = new registration({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: req.body.password
        });
        await reg.save();
        res.send(reg);
    }
});
// router.post('/postreg', (req, res) => {
//     var emp = new registration({
//         fname: req.body.fname,
//                 lname: req.body.lname,
//                 email: req.body.email,
//                 password: req.body.password
//     });
//     emp.save((err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
//     });
// });
 
module.exports = router;