const express=require("express")
const app=express()
const port=3000

app.use(express.json())

app.get("/",async(req,res)=>{
    
    res.status(200).send("the server is running")
})

app.post("/login",async(req,res)=>{
    const{username,password}=req.body
    if(!username){
        return res.status(400).send("username is not entered")
    }
    if(!password){
        return res.status(400).send("password is not entered")
    }
    if (password.length<8 || password.length>40){
        return res.status(400).json({"data":"password need to be more than 8 char or less than 40 char"})
    }
    else{
        return res.status(200).send("login successful")
    }
})

app.listen(port,async()=>{
    console.log(`server is running on this port ${port}`)
})
