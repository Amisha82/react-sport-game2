import React from "react";
import "./App.css";
import Game from "./components/game/Game";
import image1 from "./assests/images/bunny.png";
import image2 from "./assests/images/raccoon.png";
import image3 from "./assests/images/squirrel.png";
import image4 from "./assests/images/hound.png";
function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: image2,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: image3,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: image1,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: image4,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

export default App;
