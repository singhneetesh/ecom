const express = require('express');
const Users= require('./DB/Users')
const app = express()
const cors = require('cors')
require('./DB/config');
app.use(cors())
app.use(express.json())

app.post('/register', async (req, resp)=>{
   console.log(req.body)
    let user = new Users(req.body);
    let result = await user.save();
    resp.send(result);
})

app.listen(4000, () => {
    console.log(`server is running http://localhost:4000`)
})