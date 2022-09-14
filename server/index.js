// server/index.js
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

let data = [
  {
    topic: "UAE",
    backgroundImage:
      "dubai2.jpg" ||
      "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/85/a3/51/85a351dc-0e0c-ac79-6d47-360603bdbc88/0.jpg/1200x1200bf-60.jpg",
    preambula: "Preambula for UAE",
    text: "Lorem Ipsum UAE",
  },

  {
    topic: "china",
    backgroundImage:
      "../src/imagesSrc/china.jpg" ||
      "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/85/a3/51/85a351dc-0e0c-ac79-6d47-360603bdbc88/0.jpg/1200x1200bf-60.jpg",
    preambula: "Preambula for China",
    text: "Lorem Ipsum China",
  },

  {
    topic: "argentina",
    backgroundImage:
      "../src/imagesSrc/argentina2.jpg" ||
      "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/85/a3/51/85a351dc-0e0c-ac79-6d47-360603bdbc88/0.jpg/1200x1200bf-60.jpg",
    preambula: "Preambula for Argentina",
    text: "Lorem Ipsum Argentina",
  },

  {
    topic: "vietnam",
    backgroundImage:
      "../src/imagesSrc/vietnam.jpg" ||
      "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/85/a3/51/85a351dc-0e0c-ac79-6d47-360603bdbc88/0.jpg/1200x1200bf-60.jpg",
    preambula: "Preambula for Vvietnam",
    text: "Lorem Ipsum Vietnam",
  },

  {
    topic: "somalia",
    backgroundImage:
      "../src/imagesSrc/somalia.jpg" ||
      "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/85/a3/51/85a351dc-0e0c-ac79-6d47-360603bdbc88/0.jpg/1200x1200bf-60.jpg",
    preambula: "Preambula for Somalia",
    text: "Lorem Ipsum Somalia",
  },
];

app.get("/blog", (req, res) => {
  console.log(req.query.countryName);
  console.log(
    data.filter((post) => post.topic.includes(req.query.countryName))
  );

  if (req.query.countryName) {
    res.send(data.filter((post) => post.topic.includes(req.query.countryName)));
  } else {
    res.send(data);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
