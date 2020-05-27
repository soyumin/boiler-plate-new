const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,
        unique:1
    },
    password:{
        type: String,
        minlength:5
    },
    role:{
        type: Number,
        default: 0
    },
    image: String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }

})

const User = mongoose.model('User',userSchema)

module.exports = {User} //다른곳에서도 User Schema 를 쓸 수 있게끔..