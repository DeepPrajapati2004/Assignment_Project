import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
// No need for additional CSS imports if you're using Tailwind CSS in your project

function Demo() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    gsap.to(marqueeRef.current, {
      x: '100%', // Adjust based on your text length and container size
      ease: "linear",
      duration: 10, // Adjust duration for speed
      repeat: 1,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#3c3836] text-[#ebdbb2] items-center justify-center">
      <div className="overflow-hidden w-full">
        <div className="whitespace-nowrap" ref={marqueeRef}>
          <span className="text-lg md:text-xl lg:text-2xl block">
            📣 Welcome to our service! Place your order now and get a special discount! 📣
          </span>
        </div>
      </div>
    </div>
  );
}

export default Demo;
