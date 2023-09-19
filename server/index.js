const express = require('express');
const cors= require('cors')
const { default: mongoose } = require('mongoose');
const app = express()
require('dotenv').config()

const userRoutes = require('./routes/userRoute');

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB connection successfully!")
}).catch((err)=>{
    console.log(err)
})

// Use user routes
app.use('/api/users', userRoutes);


app.get('/',(req,res)=>{
   res.send('hello')
})

const port = process.env.PORT || 4000 

app.listen(port, ()=>{
    console.log(`server is running http://localhost:${port}`)
})