const mongoose=require('mongoose');

const signUpCol=new mongoose.Schema({
    email: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
});

const SignUpModel=mongoose.model('signupUsers',signUpCol);

module.exports=SignUpModel;