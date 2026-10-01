import Header from "./components/Header/Header";
import { navLinks } from "./data/navLinks";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* TEMPORÁRIO: seções vazias só pra testar a navegação */}
        {navLinks.map((link) => (
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