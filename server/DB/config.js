const  mongoose = require('mongoose');
mongoose.connect("mongodb+srv://test:test@cluster0.9x7zwsy.mongodb.net/?retryWrites=true&w=majority",
{ useNewUrlParser: true,
useUnifiedTopology: true,
}).then(() => {
console.log("DB connection successfully!")
}).catch((err) => {
console.log(err)
})