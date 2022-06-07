const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const evilObj = {
  1: {
    text: "Resident Evil was originally intended to be a remake of a game called Sweet Home, which was a game inspired by a japanese horror film about a haunted mansion",
    image: "https:......",
  },

  2: {
    text: "The game was going to be in first-person perspective, but the director Shinja Mikami changed it a fixed-camera position after playing another horror title, Alone in the Dark",
    image: "https:......",
  },

  3: {
    text: "Co-Op mode was almost included ",
    image: "https:......",
  },

  4: {
    text: "If it were not for the technical limitations during the start of the series, there would have been a Game Boy Color RE game",
    image: "https:......",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:search", (request, response) => {
  // const searches = request.params.search.toLowerCase()
  const id = request.params.search;
  if (evilObj[id]) {
    response.json(evilObj[id]);
  } else {
    response.json(evilObj[1]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}!`);
});
