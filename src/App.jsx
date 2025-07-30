import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white-heat dark:bg-black-sheep text-black-sheep dark:text-white-heat selection:bg-black-sheep selection:text-white-heat dark:selection:bg-white-heat dark:selection:text-black-sheep transition-colors duration-700">
    <Hero/>
    </div>
  );
}

export default App;
