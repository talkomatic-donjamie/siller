import express from "express"

const app = express();

app.get("/", (req, res) => {
res.sendFile("index.html", { root: "/home/pi/project/site" })
});

app.listen(9000, () => {
  console.log(`app listening on port 9000`)
})