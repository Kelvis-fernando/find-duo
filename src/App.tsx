import "./styles/main.css";
import logoImg from "./assets/Logo.svg";

import GameBaner from "./components/GameBaner";
import CreateAdBaner from "./components/CreateAdBaner";
import { useState, useEffect } from "react";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  adsCount: Number;
  _count: {
    ad: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-n-gradient bg-clip-text">duo</span> esta aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameBaner
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ad}
              key={game.id}
            />
          );
        })}
      </div>

      <CreateAdBaner />
    </div>
  );
}

export default App;
