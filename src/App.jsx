import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/all';
import Hero from './sections/Hero.jsx';
import NavBar from './sections/NavBar.jsx';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero/>
    </main>
  );
}

export default App