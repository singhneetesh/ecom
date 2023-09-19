let express = require('express');
const Pool = require('pg').Pool
let app = express()

const pool = new  Pool({
    user:"postgres",
    password:"Rel!@blE@1279#",
    host:"192.168.2.217",
    port:19797,
    database:""
})



app.get('/', ((req, res) => {
    console.log("adsfcsdf", req.header)
res.send("app is working ")

    res.json(array)
}))

app.listen(5000,()=>{
    console.log("Server running port 5000")
})