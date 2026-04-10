import { useState } from "react";

function Home() {
  const [showFlower, setShowFlower] = useState(false);

  return (
    <div className="container">
      <style>{`
        .container {
          text-align: justify;
          padding: 40px;
          font-family: Arial, sans-serif;
        }

        button {
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 8px;
          border: none;
          background-color: #ff7aa2;
          color: white;
          transition: transform 0.2s ease;
        }

        button:hover {
          transform: scale(1.05);
        }

        .flower {
          font-size: 60px;
          margin-top: 20px;
          animation: grow 1.5s ease forwards;
        }

        @keyframes grow {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.3) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(360deg);
          }
        }
      `}</style>

      <h1>Site em Construção...</h1>

      <p>
        <b>Log do Sistema:</b>O devdiario.com.br ainda está tomando forma, mas o
        primeiro acesso não poderia ser outro, a não ser o seu.
      </p>

      <p>
        Sei que o dia de ontem foi cansativo, por conta dos afazeres, daqueles
        pestinhas do curso também, a semana como um todo, mas ocê tem dado o seu
        melhor, vejo isso todo dia, no tanto de coisa que dá conta, apesar dos
        dias puxados, você continua se esforçando e isso é admirável em você,
        meu bem!
      </p>

      <p>
        Eu espero que tenha descansado bem, que seu dia hoje seja mais leve, e
        nisso eu vou fazer o possível pra contribuir, afinal, hoje você tem uma
        pizza agendada pra mais tarde, com direito à sobremesa e preguicinha,
        tudo na medida.
      </p>

      <p>Você é meu norte e minha sorte.</p>

      <p>
        Logo menos vai ter mais coisas por aqui, vou te atualizando das minhas
        nerdices sempre que possível.
      </p>

      <button onClick={() => setShowFlower(true)}>
        Clica aqui um cadin, só pra eu ver um trem
      </button>

      {showFlower && <div className="flower">🌹</div>}
    </div>
  );
}

export default Home;
