import express from "express"
import cors from "cors"

const app = express()

const users = []

app
.use(cors())
.use(express.json())
.get("/hello", (request, response) => {
    response.send( "Meu primeiro servidor, yay!")
})
.post("/sign-up", (req, res) => {
    const payload = req.body
    users.push(payload)
    console.log(payload)
    return res.send("deu certo")
})
.get("/users", (req, res) => {
    return res.send(users)
})

app.listen(4000, () => console.log("server running in port 4000"))

