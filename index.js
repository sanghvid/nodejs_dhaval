const express=require('express')
const app=express()

app.get('/',(req,res,next)=>{

    res.send('hello dhaval here!!')
})

app.listen(3000)