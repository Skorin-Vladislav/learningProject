// server/index.js
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

let data = [
  {
    topic: "UAE",
    backgroundImage:
      "dubaiWide.jpeg" ||
      "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/85/a3/51/85a351dc-0e0c-ac79-6d47-360603bdbc88/0.jpg/1200x1200bf-60.jpg",
    preambula:
      "United Arab Emirates, federation of seven emirates along the eastern coast of the Arabian Peninsula.",
    text:
      "The largest of these emirates, Abu Dhabi (Abū Ẓaby), which comprises more than three-fourths of the federation’s total land area, is the centre of its oil industry and borders Saudi Arabia on the federation’s southern and eastern borders. The port city of Dubai, located at the base of the mountainous Musandam Peninsula, is the capital of the emirate of Dubai (Dubayy) and is one of the region’s most vital commercial and financial centres, housing hundreds of multinational corporations in a forest of skyscrapers. The smaller emirates of Sharjah (Al-Shāriqah), ʿAjman (ʿAjmān), Umm al-Quwain (Umm al-Qaywayn), and Ras al-Khaimah (Raʾs al-Khaymah) also occupy the peninsula, whose protrusion north toward Iran forms the Strait of Hormuz linking the Persian Gulf to the Gulf of Oman. The federation’s seventh member, Fujairah (Al-Fujayrah), faces the Gulf of Oman and is the only member of the union with no frontage along the Persian Gulf." +
      "Historically the domain of individual Arab clans and families, the region now comprising the emirates also has been influenced by Persian culture owing to its close proximity to Iran, and its porous maritime borders have for centuries invited migrants and traders from elsewhere. In the 18th century, Portugal and the Netherlands extended their holdings in the region but retreated with the growth of British naval power there; following a series of truces with Britain in the 19th century, the emirates united to form the Trucial States (also called Trucial Oman or the Trucial Sheikhdoms). The states gained autonomy following World War II (1939–45), when the trucial states of Bahrain and Qatar declared independent statehood. The rest were formally united in 1971, with the city of Abu Dhabi serving as the capital. The stability of the federation has since been tested by rivalries between the families governing the larger states of Abu Dhabi and Dubai, though external events such as the Persian Gulf War (1990–91)" +
      "and an ongoing territorial dispute with Iran have served to strengthen the emirates` political cohesion.",
  },

  {
    topic: "china",
    backgroundImage:
      "china.jpg" ||
      "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/85/a3/51/85a351dc-0e0c-ac79-6d47-360603bdbc88/0.jpg/1200x1200bf-60.jpg",
    preambula: "Preambula for China",
    text: "Lorem Ipsum China",
  },

  {
    topic: "argentina",
    backgroundImage:
      "argentina2.jpg" ||
      "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/85/a3/51/85a351dc-0e0c-ac79-6d47-360603bdbc88/0.jpg/1200x1200bf-60.jpg",
    preambula: "Preambula for Argentina",
    text: "Lorem Ipsum Argentina",
  },

  {
    topic: "vietnam",
    backgroundImage:
      "vietnam.jpg" ||
      "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/85/a3/51/85a351dc-0e0c-ac79-6d47-360603bdbc88/0.jpg/1200x1200bf-60.jpg",
    preambula: "Preambula for Vietnam",
    text: "Lorem Ipsum Vietnam",
  },

  {
    topic: "somalia",
    backgroundImage:
      "somalia.jpg" ||
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
