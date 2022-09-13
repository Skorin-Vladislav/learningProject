// server/index.js
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

let data = [
  {
    topic: "UAE",
    backgroundImage:
      "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/85/a3/51/85a351dc-0e0c-ac79-6d47-360603bdbc88/0.jpg/1200x1200bf-60.jpg",
    preambula: "Preambula fro UAE",
    text: "Lorem Ipsum UAE",
  },
];

app.get("/blog", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
