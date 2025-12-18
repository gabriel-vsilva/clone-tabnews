// function Home(){
//     return <h1>Eu vou sair da TV, custe o que custar!</h1>
// }

// export default Home;
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carta de Hogwarts</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=IM+Fell+English&family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="wrapper">
        <article className="parchment">
          <header className="header">
            {/* Coloque o brasão em /public/hogwarts.png */}
            <img src="/hogwarts.png" alt="Brasão de Hogwarts" />
          </header>

          <section className="address">
            <p>Srta. Thaís de Fátima Souza</p>
            <p>Resende</p>
            <p>Brasil</p>
          </section>

          <section className="body">
            <p className="salutation">Prezada Srta. Thaís,</p>

            <p>
              Temos o prazer de informar que você foi aceita para participar da
              <strong> Pottercon - Rio de Janeiro</strong>.
            </p>

            <p>
              Este ingresso concede acesso a um dia inteiramente dedicado à magia,
              histórias, personagens e encantamentos que fizeram de Hogwarts um lugar
              tão especial no seu coração. 
            </p>

            <p>
              Além disso você tem direito à uma varinha exclusiva, visto que possui uma recomendação
              especial (mais conhecida como pré-venda).
            </p>
            <p>
               Sabemos o quão apaixonada a Srta. é pelo mundo bruxo, então esperamos que tire o máximo 
               proveito dessa experiência.
            </p>

            <p>
               Além disso, à desejamos um feliz natal!
            </p>

            <a
              href="/ingresso.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ticket"
            >
              Revele aqui o seu ingresso
            </a>

            <p className="closing">Atenciosamente,</p>

            <p className="signature">
              Gabriel Victor McGonagall<br />
              Vice-Diretor
            </p>
          </section>

          <footer className="footer">
            <p>
              Escola de Magia e Bruxaria de Hogwarts<br />
              Diretor: Albus Dumbledore Alves da Silva<br />
              (Ordem de Merlin, Primeira Classe e Analista de Sistemas da TV Rio Sul)
            </p>
          </footer>
        </article>
      </main>

      <style jsx>{`
        .wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #111;
          padding: 40px 20px;
        }

        .parchment {
          background: radial-gradient(circle at top, #f7efd2, #e8d9a8);
          max-width: 720px;
          width: 100%;
          padding: 56px 64px;
          font-family: 'IM Fell English', serif;
          color: #3b2a1a;
          box-shadow: 0 30px 60px rgba(0,0,0,0.6);
          border-radius: 2px;
        }

        .header {
          text-align: center;
          margin-bottom: 32px;
        }

        .header img {
          width: 160px;
        }

        .address {
          margin-bottom: 32px;
          font-size: 18px;
        }

        .body p {
          font-size: 20px;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .salutation {
          margin-top: 24px;
        }

        .ticket {
          display: inline-block;
          margin: 28px 0;
          font-size: 18px;
          text-decoration: underline;
          color: #3b2a1a;
        }

        .ticket:hover {
          opacity: 0.7;
        }

        .closing {
          margin-top: 32px;
        }

        .signature {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          margin-top: 8px;
        }

        .footer {
          margin-top: 48px;
          font-size: 14px;
          text-align: center;
          opacity: 0.85;
        }
      `}</style>
    </>
  );
}

