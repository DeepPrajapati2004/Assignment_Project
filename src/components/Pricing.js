import React from 'react';
import './Pricing.css'; // Assuming your CSS is in App.css

function Pricing() {
  return (
    <section className="w-full py-2 md:py-4 bg-[#282828] fadeIn">
      <div className="container mx-auto grid items-center gap-4 px-4 text-center md:gap-8 lg:gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#ebdbb2]">Pricing</h2>
          <p className="max-w-3xl mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          {/* Affordable Assignment Writing Service at Just 15₹ per Page */}

          Our assignment writing service offers unbeatable affordability with a price of just 15₹ per page. Get high-quality assignments delivered on time, fast, and hassle-free.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="rounded-lg border bg-[#3c3836] text-[#ebdbb2] shadow-sm w-full max-w-sm">
            <div className="space-y-1.5 flex flex-col items-center gap-1 p-4">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-[#b8bb26]"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="text-xl font-semibold">Starter</span>
              </div>
              <span className="text-3xl font-semibold">15₹ per page</span>
              <p className="text-sm text-[#bdae93]">Up to 10000 pages per Day</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <ul className="w-full grid gap-2 text-center">
                <li className="flex w-full items-center justify-center text-[#bdae93]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-2 text-[#b8bb26]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Fast delivery
                </li>
                <li className="flex w-full items-center justify-center text-[#bdae93]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-2 text-[#b8bb26]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                 Good handwriting
                </li>
                <li className="flex w-full items-center justify-center text-[#bdae93]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-2 text-[#b8bb26]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Dedicated Support
                </li>
              </ul>
            </div>
            <div className="items-center flex flex-col p-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#b8bb26] text-[#3c3836] hover:bg-[#98971a] h-9 rounded-md px-3">
                Order now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
