


import React, { useState, useEffect } from 'react';
import './Header.css'; // Ensure styles are included
import { Link } from 'react-router-dom';

// Custom hook for scramble animation
const useScrambleAnimation = (targetText, initialDelay = 1, scrambleSpeed = 50, scrambleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ👍✅abcdefghijklmnopqrstuvwxyz0123456789❤') => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentDisplay = new Array(targetText.length).fill(' ');
    let correctChars = 0;
    const targetChars = targetText.split('');
    let intervalId;

    const updateText = () => {
      currentDisplay = currentDisplay.map((char, index) => {
        if (char === targetText[index]) return char;
        const randomChar = scrambleCharacters[Math.floor(Math.random() * scrambleCharacters.length)];
        return randomChar;
      });

      if (correctChars < targetText.length) {
        currentDisplay[correctChars] = targetChars[correctChars];
        correctChars++;
      }

      setDisplayedText(currentDisplay.join(''));

      if (correctChars >= targetText.length) {
        clearInterval(intervalId);
      }
    };

    setTimeout(() => {
      intervalId = setInterval(updateText, scrambleSpeed);
    }, initialDelay);

    return () => clearInterval(intervalId);
  }, [targetText, initialDelay, scrambleSpeed, scrambleCharacters]);

  return displayedText;
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const scrambledText = useScrambleAnimation("Worlds first Assignment Writing as a Service", 1, 100);
//   const scrambledText = useScrambleAnimation("Welcome to my website", 500, 100);

  return (
    <div className="flex flex-col min-h-screen bg-[#282828] text-[#ebdbb2]">
      <header className="px-4 lg:px-8 py-2 flex items-center justify-between border-b border-gray-700">
      <a href="#" className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 3 4 8 5-5 5 15H2L8 3z" />
          </svg>
          <span className="sr-only">Acme Inc</span>
        </a>
        
        <nav className={`fixed md:relative top-0 z-20 ${isMenuOpen ? "right-0 bg-[#1d2021]"  : "-right-full md:right-0"} w-3/4 md:w-auto max-w-xs md:max-w-none bg-[#282828] transition-transform duration-300 ease-out md:transition-none flex flex-col md:flex-row`}>
        <div className="flex justify-end p-4 md:hidden">
          <button onClick={() => setIsMenuOpen(false)} aria-label="close menu">
            <svg className="h-6 w-6 text-[#d79921]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <a href="#" className="text-sm font-medium hover:text-[#d79921] py-2 px-4 md:px-2 block border-b md:border-none border-[#d79921]">Features</a>
        <a href="#" className="text-sm font-medium hover:text-[#d79921] py-2 px-4 md:px-2 block border-b md:border-none border-[#d79921]">Pricing</a>
        <a href="#" className="text-sm font-medium hover:text-[#d79921] py-2 px-4 md:px-2 block border-b md:border-none border-[#d79921]">About</a>
        <a href="#" className="text-sm font-medium hover:text-[#d79921] py-2 px-4 md:px-2 block">Contact</a>
      </nav>
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <section className="text-center p-4 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {scrambledText}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Our service offers cost-effective solutions for all your assignment needs. With a team of professional writers, we guarantee high-quality work delivered within your specified deadline.

          {/* Affordable Assignment Writing Service at Just 15₹ per Page */}
          </p>

          <div className="animate-bounce">
            <svg className="mx-auto h-6 w-6 text-[#d79921]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="space-x-4 mb-8 mt-5">
          <Link to="/order" className="px-4 py-2 rounded bg-[#d79921] text-gray-900 hover:bg-[#b57614] transition duration-300">
        Order now
      </Link>
            <a href="#" className="px-4 py-2 rounded border border-[#d79921] text-[#d79921] hover:bg-[#d79921] hover:text-gray-900 transition duration-300">
              Learn More
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Header;


