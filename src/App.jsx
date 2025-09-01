import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/all';
import Hero from './sections/Hero.jsx';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <nav>
        <img src='/images/nav-logo.svg' className='scale-90' alt='GTA 6 Logo' />
        <img src="/images/menu.svg" className="w-10" alt="Hamburger menu"/>
      </nav>
      <Hero/>
    </main>
  );
}

export default App