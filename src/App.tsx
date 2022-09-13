import "./styles/main.css";
import logoImg from "./assets/Logo.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-n-gradient bg-clip-text">duo</span> esta aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="">
          <img src="/image1.png" alt="" />
        </a>
        <a href="">
          <img src="/image2.png" alt="" />
        </a>
        <a href="">
          <img src="/image3.png" alt="" />
        </a>
        <a href="">
          <img src="/image5.png" alt="" />
        </a>
        <a href="">
          <img src="/image6.png" alt="" />
        </a>
        <a href="">
          <img src="/image7.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default App;