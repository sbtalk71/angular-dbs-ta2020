const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const PORT=3000;

const app=express();
app.use(bodyParser.json());
app.use(cors());

app.get("/",function(req,res){

    res.send('Welcome to Express Server, its running...');
});

app.post("/register", function(req,res){
    console.log(req.body);
    res.status(200).send("Message : Data Submitted Successfully");
});

app.listen(PORT,()=>{console.log("Server Running on port "+PORT)});