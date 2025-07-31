import Hero from "./components/Hero";
import About from "./components/About";
import TheNav from "./components/TheNav";

function App() {
  return (
    <>
      <div className="bg-white-heat dark:bg-black-sheep text-black-sheep dark:text-white-heat selection:bg-black-sheep selection:text-white-heat dark:selection:bg-white-heat dark:selection:text-black-sheep transition-colors duration-700">
        <TheNav />
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
