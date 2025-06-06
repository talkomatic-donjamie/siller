import express from "express"

const app = express();

app.get("/", (req, res) => {
  res.sendFile("/home/pi/project/site/index.html")
});

console.log('Starting...');
setInterval(() => {
}, 1000);

app.listen(9000, () => {
  console.log(`app listening on port 9000`)
})