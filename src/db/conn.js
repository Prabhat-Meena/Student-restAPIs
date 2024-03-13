const mongoose = require("mongoose");

mongoose.connect(process.env.DB)
.then(()=>{
    console.log("Connected succesfull");
}).catch((e)=>{
    console.log("Not connected");
});