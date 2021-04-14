const express = require('express')
const app = express()
const {User} = require('./models')

app.use(express.json())

app.get('/api/users',async(req,res)=>{
    const users = await User.find()
    res.send(users)
})

app.post('/api/register',async(req,res)=>{
    const user = await User.create({
        username:req.body.username,
        password:req.body.password
    })
    res.send(user)
})
app.post('/api/login',async(req,res)=>{
    const user = await User.findOne({
        username:req.body.username
    })
    res.send(user)
})  



app.listen(3000,()=>{
    console.log('正在监听http://localhost:3000')
})