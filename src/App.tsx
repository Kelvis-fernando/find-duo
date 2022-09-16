import "./styles/main.css";
import logoImg from "./assets/Logo.svg";
import { useState, useEffect } from "react";

import GameBaner from "./components/GameBaner";
import CreateAdModal from "./components/CreateAdModal";
import CreateAdBaner from "./components/CreateAdBaner";
import * as Dialog from "@radix-ui/react-dialog";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  adsCount: Number;
  _count: {
    ads: number;
  };
}

const App = () => {
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
              adsCount={game._count.ads}
              key={game.id}
            />
          );
        })}
      </div>
      <Dialog.Root>
        <CreateAdBaner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
};

export default App;
