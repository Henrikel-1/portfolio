import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import { navLinks } from "./data/navLinks";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />

        {/* TEMPORÁRIO: seções vazias só pra testar a navegação */}
        {navLinks
          .filter((link) => !["#inicio", "#sobre"].includes(link.href))
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