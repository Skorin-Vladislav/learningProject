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
    preambula:
      "Occupying nearly the entire East Asian landmass, it covers approximately one-fourteenth of the land area of Earth. Among the major countries of the world, China is surpassed in area by only Russia and Canada.",
    text: "Within China’s boundaries exists a highly diverse and complex country. Its topography encompasses the highest and one of the lowest places on Earth, and its relief varies from nearly impenetrable mountainous terrain to vast coastal lowlands. Its climate ranges from extremely dry, desertlike conditions in the northwest to tropical monsoon in the southeast, and China has the greatest contrast in temperature between its northern and southern borders of any country in the world.",
  },

  {
    topic: "argentina",
    backgroundImage:
      "argentina2.jpg" ||
      "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/85/a3/51/85a351dc-0e0c-ac79-6d47-360603bdbc88/0.jpg/1200x1200bf-60.jpg",
    preambula:
      "Argentina, country of South America, covering most of the southern portion of the continent.",
    text: "Argentina has long played an important role in the continent’s history. Following three centuries of Spanish colonization, Argentina declared independence in 1816, and Argentine nationalists were instrumental in revolutionary movements elsewhere, a fact that prompted 20th-century writer Jorge Luis Borges to observe, “South America’s independence was, to a great extent, an Argentine enterprise.” Torn by strife and occasional war between political factions demanding either central authority (based in Buenos Aires) or provincial autonomy, Argentina tended toward periods of caudillo, or strongman, leadership, most famously under the presidency of Juan Perón. The 1970s ushered in a period of military dictatorship and repression during which thousands of presumed dissidents were “disappeared,” or murdered; this ended in the disastrous Falklands Islands War of 1982, when Argentina invaded the South Atlantic islands it claimed as its own and was defeated by British forces in a short but bloody campaign. Defeat led to the fall of the military regime and the reestablishment of democratic rule, which has since endured despite various economic crises.",
  },

  {
    topic: "vietnam",
    backgroundImage:
      "vietnam.jpg" ||
      "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/85/a3/51/85a351dc-0e0c-ac79-6d47-360603bdbc88/0.jpg/1200x1200bf-60.jpg",
    preambula:
      "Vietnam is a long, narrow nation shaped like the letter s. It is in Southeast Asia on the eastern edge of the peninsula known as Indochina.",
    text: "Vietnam has a long history of affiliating with a dominant civilization and adapting that civilization’s ideas, institutions, and technology to Vietnamese purposes. This pattern of affiliating and adapting was already evident in Vietnam’s historical relations with China, and it reappeared as descendants of mandarins responded to the challenge of the West by rejecting tradition and becoming communists to combat colonialism. The pattern was evident again as it animated 20th-century artistic movements that employed Western forms to promote social renovation; and since the 1980s it has been the driving force behind the Vietnam Communist Party’s embrace of economic liberalization and integration into the world economy. Such strategic absorption and adaptation have helped propel Vietnam to become one of the world’s most populous countries, with one of the most rapidly expanding market economies.",
  },

  {
    topic: "somalia",
    backgroundImage:
      "somalia.jpg" ||
      "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/85/a3/51/85a351dc-0e0c-ac79-6d47-360603bdbc88/0.jpg/1200x1200bf-60.jpg",
    preambula:
      "Somalia, easternmost country of Africa, on the Horn of Africa. It extends from just south of the Equator northward to the Gulf of Aden and occupies an important geopolitical position between sub-Saharan Africa and the countries of Arabia and southwestern Asia. The capital, Mogadishu, is located just north of the Equator on the Indian Ocean.",
    text: "Somalia is a country of geographic extremes. The climate is mainly dry and hot, with landscapes of thornbush savanna and semidesert, and the inhabitants of Somalia have developed equally demanding economic survival strategies. Apart from a mountainous coastal zone in the north and several pronounced river valleys, most of the country is extremely flat, with few natural barriers to restrict the mobility of the nomads and their livestock. The Somali people are clan-based Muslims, and about three-fifths follow a mobile way of life, pursuing nomadic pastoralism or agropastoralism.",
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
