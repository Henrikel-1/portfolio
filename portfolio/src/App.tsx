import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { navLinks } from "./data/navLinks";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* TEMPORÁRIO: seções vazias só pra testar a navegação */}
        {navLinks
          .filter((link) => link.href !== "#inicio")
          .map((link) => (
            <section
              key={link.href}
              id={link.href.slice(1)}
              className="container"
              style={{ minHeight: "80vh" }}
            >
              <h2>{link.label}</h2>
            </section>
          ))}
      </main>
    </>
  );
}

export default App;