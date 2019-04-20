const express=require('express')
const app=express()

app.get('/',(req,res,next)=>{

    res.send('hello dhaval here!!')
})

app.get('/json',(req,res,next)=>{

    const data={
        "hello":"This is Dhaval Sanghvi"
        }
        res.json(data)
})

app.listen(3000)
