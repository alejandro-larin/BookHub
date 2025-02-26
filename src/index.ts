import express from 'express'
const app = express()
app.use(express.json())
const  PORT = 3000

app.get('/ping',(_req,res)=>{

    res.send(`someone pinged here!! ${new Date().toLocaleDateString()}`)
})

app.listen(PORT,()=>{
    console.log(`Server running in port ${PORT}`)
})