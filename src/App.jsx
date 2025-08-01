import Hero from "./components/Hero";
import About from "./components/About";
import TheNav from "./components/TheNav";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="bg-white-heat dark:bg-black-sheep text-black-sheep dark:text-white-heat selection:bg-black-sheep selection:text-white-heat dark:selection:bg-white-heat dark:selection:text-black-sheep transition-colors duration-500">
        <TheNav />
        <section id="Hero"></section>
        <Hero />
        <section id="About"></section>
        <About />
        <section id="Projects"></section>
        <Projects />
      </div>
    </>
  );
}

export default App;
