import React, { useState } from 'react';


function Footer() {
  // State for managing the visibility of the mobile navigation menu


  return (



      <footer className="py-6 text-center border-t border-gray-700 bg-[#282828] text-[#ebdbb2]">
        <p className="text-sm">
          © 2024 Deep gohil All rights reserved.
        </p>
        <nav className="mt-4">
          <a href="#" className="text-xs hover:text-[#d79921] mx-2">Terms of Service</a>
          <a href="#" className="text-xs hover:text-[#d79921] mx-2">Privacy</a>
        </nav>
      </footer>

  );
}

export default Footer;

