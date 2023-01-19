const { string, required } = require('joi')
const mongoose = require('mongoose')
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"name less nigga"],
        minlength:3,
        maxlength:50
    },

    email: {
        type: String,
        unique: true,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
          message: 'Please provide valid email',
        },
      },
    pasword:{
        type:String,
        required:[true,'pas nigga word bi ach'],
        minlength:8
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }
})

module.exports=mongoose.model('User',userSchema)