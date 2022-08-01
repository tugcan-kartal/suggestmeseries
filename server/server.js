const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const SignUpModel = require('./models/SignUpModel');
const PostModel = require('./models/PostModel');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://alwaysandforeverbytugcan:o5rsYOYcsmKzGfbw@cluster0.ozkyoy1.mongodb.net/?retryWrites=true&w=majority');

app.get('/',(req,res)=>{
    res.status(200).send('Hello');
});

app.get('/allUsers',async(req,res)=>{
    SignUpModel.find({},(err,data)=>{
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
})

app.get('/allPosts',async(req,res)=>{
    PostModel.find({},(err,data)=>{
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
})

app.post('/addSignUpToDB',async(req,res)=>{
    const email=req.body.email;
    const username=req.body.username;
    const password=req.body.password;

    const signup=new SignUpModel({email:email,username:username,password:password});
    await signup.save();

    res.send(signup);
});

app.post('/addPostToDB',async(req,res)=>{
    const imageUrl=req.body.imageUrl;
    const subject=req.body.subject;
    const like=req.body.like;
    const dislike=req.body.dislike;

    const addpost=new PostModel({imageUrl:imageUrl,subject:subject,like:like,dislike:dislike});
    await addpost.save();

    res.send(addpost);
});

app.put('/update',async(req,res)=>{
    const newSubject=req.body.newSubject;
    const id=req.body.id;

    try{
        await PostModel.findById(id,(error,postToUpdate)=>{
            postToUpdate.subject=newSubject;
            postToUpdate.save();
        }).clone()
    }catch(err){
        console.log(err)
    }

    res.send("updated");
});

app.delete('/delete/:id',async(req,res)=>{
    const id=req.params.id;
    await PostModel.findByIdAndRemove(id).exec();
    res.send('item deleted');
});

app.listen(3001,()=>{
    console.log('You are connected!');
});
