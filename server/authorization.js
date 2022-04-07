/* require('dotenv').config()

const { append } = require("express/lib/response");


app.post("/login", (req, res) => {


    const username = req.body.username
    const user = {name: username}
  
    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    res.json({ accessToken: accessToken, refreshToken: refreshToken })
  })


function generateAccessToken(user) {
   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s"})
}

append.listen(3000) */