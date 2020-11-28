const express = require("express")
const songs = require("./songs")
const app = express()

app.get("/songs", (req, res) => {
  res.send(songs)
})

app.get("/random", (req, res) => {
  res.send(songs[Math.floor(Math.random() * songs.length)])
})

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html")
})

app.get("/song/:id", (req, res) => {
  if(req.params.id)return res.send(songs[req.params.id]?songs[req.params.id]:"404")
  else return res.send("song id missing u nub")
})

app.listen(3000, () => {
  console.log("Epic")
})