import express from "express"

const app = express();

app.get("/", (req, res) => {
res.sendFile("C:/Users/Donjamie/ecosystem-project/site/index.html")
});

app.listen(9000, () => {
  console.log(`app listening on port 9000`)
})