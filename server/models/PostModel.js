const mongoose=require('mongoose');

const postInfoCol=new mongoose.Schema({
    subject:{
        type: String,
    },
    imageUrl: {
        type: String,
    },
    like: {
        type: Number,
    },
    dislike: {
        type: Number,
    },
});

const PostModel=mongoose.model('postmodel',postInfoCol);

module.exports=PostModel;