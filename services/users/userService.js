const mongoose = require('mongoose')
const User = require('../../models/users');

module.exports = {
    getUser: () => {
        return new Promise((resolve, reject) => {
            User
                .find()
                .exec()
                .then(docs => {
                    return resolve(docs)
                })
                .catch(err => {
                    return reject(err);
                })
        })
    },
    addUser: (firstName, lastName, email, phoneNumber, age) => {
        return new Promise((resolve, reject) => {
            const newUser = new User({
                _id: mongoose.Types.ObjectId(),
                firstName: firstName,
                lastName: lastName,
                email: email,
                age: age,
                phoneNumber: phoneNumber,
                userType: "public",
                tickets: []
            })
            newUser
                .save()
                .then(result => {
                    return resolve(result)
                })
                .catch(err => {
                    return reject(err)
                })

        })
    },
    deleteUser: (userId) => {
        return new Promise((resolve, reject) => {
            User
                .find({ _id: userId })
                .remove()
                .exec()
                .then(result => {
                    return resolve(result)
                })
                .catch(err => {
                    return reject(err);
                })
        })
    }
}