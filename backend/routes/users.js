const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => { // Get a list of users
    User.find().then(users => res.json(users)).catch(err => res. status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => { // Creat a new user
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.pasword;
    const newUser = new User({
        username: username,
        email: email,
        password: password,
    });

    newUser.save().then(() => req.join('User added!')).catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => { // Find user by id
    User.findById(req.params.id).then(user => res.json(user)).catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => { // Delete user with id
    User.findByIdAndDelete(req.params.id).then(() => res.json("User was deleted")); 
});

router.route('/update/:id').post((req, res) => { // Update user info with id
    User.findById(req.params.id).then(user => {
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = req.body.password;

    user.save().then(() => res.join("User successfully updated!")).catch(err => res.status(400).json('Error: ' + err));
    }).catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;