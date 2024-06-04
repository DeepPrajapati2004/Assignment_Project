import React, { useState, useEffect, useRef } from 'react';
import './Reviews.css'; // Ensure your CSS file is correctly imported

// Updated Testimonial data with rating
const testimonials = [
  {
    name: "Rishita koshti",
    daysAgo: 2,
    text: "I used this service for a research paper last semester when I was swamped with deadlines. Not only was it affordable at just 15 INR per page, but the delivery was also right on time. The process was straightforward, and it saved me a ton of time. Plus, getting the first five pages for free was a fantastic bonus.",
    rating: 5, // Number of stars
  },
  {
    name: "Falguni parmar",
    daysAgo: 5,
    text: "Balancing work and school has always been a challenge for me, but this website has been a lifesaver. The fast and easy process allowed me to submit my assignment without spending hours on it. The quality of writing was great, and it was so cost-effective. The first five pages for free truly sealed the deal. Will definitely use this service again!",
    rating: 4, // Number of stars
  },
  {
    name: "Aksh nishar",
    daysAgo: 10,
    text: "As someone who is constantly juggling multiple assignments, finding this website was a game-changer. The simple interface made it easy to submit my request, and the delivery was impressively on time. The pricing is unbeatable, especially with the first five pages free.great resource for any student looking to save time",
    rating: 4, // Number of stars
  }
];

function Reviews() {
  const [visibleStars, setVisibleStars] = useState({});
  const starRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleStars(prevVisibleStars => ({
              ...prevVisibleStars,
              [entry.target.dataset.index]: true
            }));
          }
        });
      },
      {
        threshold: 0.5 // Adjust this value based on when you want the animation to start
      }
    );

    starRefs.current.forEach(star => {
      if (star) observer.observe(star);
    });

    return () => observer.disconnect();
  }, []);

  const renderStars = (rating, testimonialIndex) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        ref={el => starRefs.current.push(el)}
        data-index={`${testimonialIndex}-${index}`}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 transition-opacity duration-700 ${index < rating ? 'text-[#fabd2f]' : 'text-[#928374]'} ${visibleStars[`${testimonialIndex}-${index}`] ? 'fadeIn' : ''}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-[#282828]">
      <div className="max-w-6xl px-4 mx-auto py-6">
        <div className="text-center py-6">
          <h2 className="text-3xl font-bold text-[#ebdbb2]">Customer Testimonials</h2>
          <p className="text-[#928374] mt-2">Read what our satisfied students and professionals have to say</p>
        </div>
        <div className="grid gap-6 items-start grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map(({ name, daysAgo, text, rating }, index) => (
            <div key={index} className="rounded-lg border bg-[#3c3836] text-[#ebdbb2] shadow-sm w-full p-0">
              <div className="flex flex-col space-y-1.5 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-xs">{daysAgo} days ago</p>
                  </div>
                  <div className="flex items-center">
                    {renderStars(rating, index)}
                  </div>
                </div>
                <p className="mt-4">{text}</p>
              </div>
              <div className="flex items-center p-4 justify-end">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-[#d79921] text-[#3c3836] hover:bg-[#b57614] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d79921] focus:ring-offset-2 disabled:opacity-50 h-9 px-3">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
