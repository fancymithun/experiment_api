const express = require("express")
const User = require("./models/User");
const routes = require("./routes/user")

const app = express()


app.use(express.urlencoded())

app.use(express.json())

app.use(routes);
app.get("/",(req,res)=> {
    res.json({
        message : User.modelName
    })
})


let PORT = 4100

app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`);
})